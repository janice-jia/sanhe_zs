<script setup lang="ts">
import { ref } from 'vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import api from '../api'
const baseURL = import.meta.env.VITE_API_BASE_URL;
import { showToast, showSuccessToast } from 'vant';
import { useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()


// const pData:any = ref({})
const errorField:any = ref([])

const pData:any = ref({
  realname:'杨标',
  // schoolname:'三河五中',
  // workname:'测试作品',
  certificateno: '532625199501141319',
})

// 查询
const search = ()=>{
  let canSub = true
  errorField.value = {}
  if(!pData.value.realname){
    errorField.value.realname = true
    canSub = false
  }
  // if(!pData.value.schoolname){
  //   errorField.value.schoolname = true
  //   canSub = false
  // }
  // if(!pData.value.workname){
  //   errorField.value.workname = true
  //   canSub = false
  // }
  if(!pData.value.certificateno){
    errorField.value.certificateno = true
    canSub = false
  }
  
  if(!canSub){
    return
  }
  api.GetCertificate({...pData.value}).then((res:any) => {
    if(res.code!=200){
      showToast(res?.msg || '查询失败');
    }else{
      // 下载地址
      const certificateUrl = (baseURL=='/api' ? 'http://localhost:9000' : baseURL)+res.data.certificateUrl
      router.push({ 
        path: '/certificate', 
        query:{
          realname:res.data.realname, 
          certificateUrl: certificateUrl,
        }
      });
    }
  });
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <div class="textbox">
        <h1>证书查询</h1>
        <p>Certificate query</p>
      </div>

      <div class="searchbox">
        <!-- 获奖人姓名 -->
        <div class="form_item">
          <div class="label_box"><span class="red">*</span>获奖人姓名</div>
          <div class="input_box" :class="{'error':errorField.realname}">
            <input type="text" v-model="pData.realname" />
          </div>
          <div class="error-msg" ><span v-if="errorField.realname">请输入正确的姓名格式</span></div>
        </div>

        <!-- 学校名称 -->
        <div class="form_item">
          <div class="label_box">学校名称</div>
          <div class="input_box" :class="{'error':errorField.schoolname}">
            <input type="text" v-model="pData.schoolname"/>
          </div>
          <div class="error-msg"><span v-if="errorField.schoolname">请输入正确的学习名称</span></div>
        </div>

        <!-- 作品名称 -->
        <div class="form_item">
          <div class="label_box">作品名称</div>
          <div class="input_box" :class="{'error':errorField.workname}">
            <input type="text" v-model="pData.workname"/>
          </div>
          <div class="error-msg"> <span v-if="errorField.workname">请输入正确的作品名称</span></div>
        </div>

        <!-- 获奖证书编号 -->
        <div class="form_item">
          <div class="label_box"><span class="red">*</span>获奖证书编号</div>
          <div class="input_box" :class="{'error':errorField.certificateno}">
            <input type="text" v-model="pData.certificateno"/>
          </div>
          <div class="error-msg"><span v-if="errorField.certificateno">请输入正确的证书编号</span></div>
        </div>

        <div class="search_btn">
          <button type="button" @click="search">查询</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main{
  width: 100%;
}
.wrapper{
    width: 100%%;
    height: 570px;
    .textbox{
      height: 180px;
      background: url(../assets/zhuangshi.png);
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
    .searchbox{
      padding: 40px 60px;
      height: 570px;
      background: #FFFFFF;
      box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.08);
      border-radius: 20px 20px 20px 20px;
      .form_item{
        .label_box{
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 500;
          font-size: 18px;
          color: #333333;
          text-align: left;
          font-style: normal;
          text-transform: none;
          .red{
            color: #F10000;
          }
        }
        .input_box{
          input{
            width: 100%;
            height: 48px;
            border-radius: 8px 8px 8px 8px;
            border: 1px solid #666666;
            padding: 0 20px;

            font-family: Source Han Sans, Source Han Sans;
            font-weight: 400;
            font-size: 20px;
            color: #333333;
            line-height: 48px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        
        .error{
          input{
            border-color:#F10000;
          }
        }

        .error-msg{
          margin-top: 5px;
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 400;
          font-size: 12px;
          color: #F10000;
          line-height: 17px;
          text-align: right;
          font-style: normal;
          text-transform: none;
          min-height: 20px;
        }
      }

      .search_btn{
        margin-top: 30px;
        button{
          width: 100%;
          height: 60px;
          background: #3853FF;
          border-radius: 8px 8px 8px 8px;
          border: none;
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 500;
          font-size: 24px;
          color: #FFFFFF;
          line-height: 60px;
          text-align: center;
          font-style: normal;
          text-transform: none;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
