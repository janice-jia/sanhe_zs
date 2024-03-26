<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import api from './api'
import { ref } from 'vue'

const list:any = ref([]);

// 登录
const GetPagerTable = ()=>{
  api.GetPagerTable({
    page: 1,
    limit: 10,
    jsondata: {
      article_title: ''
    },
  }).then((res:any) => {
    console.info(res)
    if(res?.code == 200){
      res.data?.forEach(item => {
        item.createDate = item.create_date ? item.create_date.slice(0,10) : ''
      });
      list.value = res.data
    }else{
      list.value = []
    }
  })
}
GetPagerTable()
</script>

<template>
  <Header/>
  <div></div>
  <div class="main_box">
    <div class="main_bg"></div>
    <div class="main">
      <header>
        <div class="wrapper">
          <div class="textbox">
            <h1>获奖文件下载</h1>
            <p>Winning file download</p>
          </div>
          <div class="downbox">
            <div class="search_box">
              <input type="text" class="search_input" placeholder="输入想要搜索的关键字查询"/>
              <button class="search_btn" type="buttom">搜索</button>
            </div>
            <div class="list">
              <div class="item" v-for="(item, index) in list" :key="index">
                <div class="tit">{{item.article_title}}</div>
                <div class="time">{{item.createDate}}</div>
              </div>
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
          width: 80%;
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
          &:hover{
            background: #3853FF;
            border-radius: 100px 100px 100px 100px;
            color: #FFFFFF;
          }
        }
      }
      .list{
        padding-top: 40px;
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
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
