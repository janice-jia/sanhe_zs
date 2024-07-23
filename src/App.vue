<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import api from './api'
import { ref } from 'vue'
import { showToast, showSuccessToast } from 'vant';
let baseURL = import.meta.env.VITE_API_BASE_URL;
baseURL = baseURL=='/api' ? 'http://150.129.138.39:14980' : baseURL;

const list:any = ref([]);
const total:any = ref(0);
const pagesTotal:any = ref(0);
const curPage:any = ref(0);
const customPage:any = ref();
const article_title:any = ref()
const originUrl:any = ref(baseURL)
import { useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()
console.info(route)
const pageName:any = ref(route.name) 

 // 在router实例上添加导航守卫
router.beforeEach((to, from, next) => {
  // 在这里可以添加你的路由变化监听逻辑
  console.log('路由即将改变：', from.path, '->', to.path);
  pageName.value = to.name
  next();
});

// 查询
const GetPagerTable = (page:any)=>{
  curPage.value = page || 1
  api.GetPagerTable({
    page: page || 1,
    limit: 10,
    jsondata: {
      article_title: article_title.value || ''
    },
  }).then((res:any) => {
    console.info(res)
    if(res?.code == 200){
      res.data?.forEach((item:any) => {
        item.createDate = item.create_date ? item.create_date.slice(0,10) : ''
      });
      list.value = res.data;
      total.value = res.rowCount;
      if(res.rowCount){
        pagesTotal.value = Math.round(res.rowCount / 10) + 1
      }
    }else{
      list.value = []
      total.value = 0
      pagesTotal.value = 0
    }
  })
}
GetPagerTable(1)

const search= ()=>{
  curPage.value = 1;
  curPage.value = 1;
  GetPagerTable(curPage.value)
}

// 上一页
const prePage= ()=>{
  curPage.value -=1;
  GetPagerTable(curPage.value)
}


// 下一页
const nextPage= ()=>{
  curPage.value +=1;
  GetPagerTable(curPage.value)
}

// 下一页
const changePage= (page:any)=>{
  if(page>pagesTotal.value){
    showToast(`当前至多 ${pagesTotal.value} 页`);
    return
  }else if(!page || page<0){
    showToast('页面至少是 1 哦');
    return
  }
  curPage.value = page;
  GetPagerTable(curPage.value)
}

const downloadFn = (item:any)=>{
  const url = originUrl.value+item.article_url
  const link = document.createElement('a')
  link.href = url
  console.log(link.href)
  // link.setAttribute('download', item.article_title)
  link.setAttribute('target', '_blank')
  document.body.appendChild(link)
  link.click()
  window.URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}
</script>

<template>
  <Header/>
  <div></div>
  <div class="main_box" v-if="!pageName || pageName=='home'">
    <div class="main_bg"></div>
    <div class="main">
      <header>
        <div class="wrapper">
          <div class="textbox">
            <h1>获奖文件下载</h1>
            <p>Winning file download</p>
          </div>
          <div class="downbox">
            <!-- 搜索 -->
            <div class="search_box">
              <input type="text" v-model="article_title" class="search_input" placeholder="输入想要搜索的关键字查询"/>
              <button class="search_btn" type="button" @click="search">搜索</button>
            </div>

            <!-- 列表 -->
            <div class="list" v-if="list.length">
              <div class="item" v-for="(item, index) in list" :key="index">
                <div class="tit" @click="downloadFn(item)">{{item.article_title}}</div>
                <div class="time">{{item.createDate}}</div>
              </div>
            </div>
            <div v-else style="margin-top: 100px;">
              <van-empty
                image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
                image-size="80"
                description="暂无内容"
              />
            </div>

            <!-- 分页 -->
            <div class="page" v-if="total">
              <span class="total">共{{total}}项</span>
              <span class="page_page" v-if="pagesTotal > 1 && curPage > 1" @click="prePage">上一页</span>
              <span class="page_num" :class="{'highClass': curPage==i}" @click="changePage(i)" v-for="i in pagesTotal">{{i}}</span>
              <span class="page_page" v-if="pagesTotal > 1 && curPage != pagesTotal" @click="nextPage">下一页</span>
              <span class="page_total">共{{pagesTotal}}页</span>
              到第<input type="number" v-model="customPage"/>页
              <button type="button" @click="changePage(customPage)">确定</button>
            </div>

            <!-- <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/search">About</RouterLink>
            </nav> -->
          </div>
        </div>
      </header>

      <RouterView />
    </div>
    <div style="height:180px"></div>
  </div>
  <div v-else>
    <RouterView />
  </div>
  <Footer/>
</template>

<style lang="less" scoped>
.main_box{
  position: relative;
  .main_bg{
    height: 680px;
    background: linear-gradient( 90deg, #3853FF 0%, #4E7CF9 100%);
  }
}
.main{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top:0;
  left: 50%;
  margin-left: -40% ;
  // padding: 0 2rem;
  header {
    width: 54%;
    clear: both;
    line-height: 1.5;
    max-height: 100vh;
  }

  .wrapper{
    width: 100%;
    height: 570px;
    .textbox{
      height: 180px;
      background: url(./assets/zhuangshi.png) no-repeat;
      background-size: auto 180px;
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      justify-content: center;
      h1{
        font-family: SJyunhei, SJyunhei;
        font-weight: normal;
        font-size: 42px;
        color: #FFFFFF;
        line-height: 59px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      p{
        font-family: SJyunhei, SJyunhei;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 25px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .downbox{
      padding: 40px;
      height: 570px;
      background: #FFFFFF;
      box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.08);
      border-radius: 20px 20px 20px 20px;
      .search_box{
        display: flex;
        justify-content: space-between;
        .search_input{
          width: 75%;
          height: 56px;
          line-height: 56px;
          background: #F6F6F6;
          padding: 0 40px;
          border: none;
          border-radius: 100px 100px 100px 100px;
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 400;
          font-size: 18px;
          color: #CCCCCC;
          line-height: 26px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .search_btn{
          padding: 0 40px;
          height: 56px;
          background: rgba(56,83,255,0.2);
          border-radius: 100px 100px 100px 100px;
          border: none;
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 500;
          font-size: 18px;
          color: #3853FF;
          line-height: 56px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          cursor: pointer;
          letter-spacing: 0;
          &:hover{
            background: #3853FF;
            border-radius: 100px 100px 100px 100px;
            color: #FFFFFF;
          }
        }
      }
      .list{
        padding-top: 40px;
        min-height: 400px;
        .item{
          display: flex;
          justify-content: space-between;
          line-height: 40px;
          .tit{
            font-family: Source Han Sans, Source Han Sans;
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            text-align: left;
            font-style: normal;
            text-transform: none;
            position: relative;
            padding-left: 20px;
            width: 80%;
            white-space: nowrap; /* 不换行 */
            overflow: hidden;    /* 超过部分隐藏 */
            text-overflow: ellipsis; /* 添加省略号表示被裁切的内容 */
            a{
              color: #666666;
            }
            &::before{
              position: absolute;
              left: 0;
              top: 13px;
              content: '';
              width: 14px;
              height: 14px;
              background: url(./assets/triangle.png) no-repeat;
            }
          }
          .time{
            font-family: Source Han Sans, Source Han Sans;
            font-weight: 400;
            font-size: 16px;
            color: #999999;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &:hover{
            .tit,
            .time{
              color: #3853FF;
              cursor: pointer;
            }
          }
        }
      }

      .page{
        text-align: center;
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        .page_page{
          margin: 0 4px;
          cursor: pointer;
        }
        .total{
          margin-right: 18px;
        }
        .total,
        .page_total{
          line-height: 30px;
          font-size: 14px;
          color: #333333;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .page_total{
          margin: 0 18px;
        }
        .page_num,
        .page_page{
          cursor: pointer;
          margin: 0 4px;
          padding: 0 10px;
          line-height: 30px;
          height: 30px;
          display: inline-block;
          border-radius: 8px 8px 8px 8px;
          border: 1px solid #CCCCCC;
          font-size: 14px;
          color: #333333;
          text-align: left;
          font-style: normal;
          text-transform: none;
          
          &:hover{
            background: #3853FF;
            color: #FFFFFF;
            border-color: #3853FF;
          }
        }
        .highClass{
          background: #3853FF;
          color: #FFFFFF;
          border-color: #3853FF;
        }
        input{
          margin: 0 8px;
          width: 30px;
          height: 30px;
          border-radius: 8px 8px 8px 8px;
          border: 1px solid #3853FF;
          font-weight: 400;
          font-size: 14px;
          color: #333333;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        button{
          width: 56px;
          height: 30px;
          text-align: center;
          background: #3853FF;
          border-radius: 8px 8px 8px 8px;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 20px;
          font-style: normal;
          text-transform: none;
          border: none;
          :hover{
            cursor: pointer;
          }
        }
      }
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
