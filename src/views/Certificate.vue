<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()
const realname:any =  ref(route.query.realname)
const certificateUrl:any = ref(route.query.certificateUrl)
</script>
<template>
  <div class="certificate">
    <div class="download">
      <a :href="certificateUrl" target="_blank">证书下载</a>
    </div>
    <div class="con_bg">
      <div class="center_box">
        <p class="p1">中小学教师资格合格证</p>
        <p class="p2">参加中小学资格考试成绩合格特发此证！</p>
        <p class="p3">考生{{realname}}在中小学语文资格考试中《综合素质》与《教育教学知识与能力》均已通过，于2024年3月8日发放此证书！</p>
      </div>
      <p class="p4">2024年03月08日</p>
      <p class="Official_seal"><img src="../assets/Official_seal.png" alt=""></p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.certificate{
  padding: 80px 0;
  position: relative;
  .download{
    position: absolute;
    right: 200px;
    top:-60px;
    a{
      font-size: 20px;
      color: #FFFFFF;
    }
  }
  .con_bg{
    height: 840px;
    width: 1200px;
    margin: 0 auto;
    background: url(../assets/certificate_bg.png) no-repeat;
    position: relative;
    .center_box{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .p1{
      padding-top: 180px;
      text-align: center;
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 500;
      font-size: 56px;
      color: #333333;
      line-height: 81px;
      font-style: normal;
      text-transform: none;
    }
    .p2{
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 400;
      font-size: 36px;
      color: #333333;
      line-height: 52px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
    .p3{
      margin-top: 60px;
      width: 696px;
      height: 96px;
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 400;
      font-size: 24px;
      color: #333333;
      line-height: 48px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .p4{
      padding-top: 150px;
      padding-right: 252px;
      width: 100%;
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 400;
      font-size: 24px;
      color: #333333;
      line-height: 35px;
      text-align: right;
      font-style: normal;
      text-transform: none;
    }
    .Official_seal{
      position: absolute;
      right: 295px;
      bottom: 130px;
      img{
        width: 223px;
        height: 224px;
        // transform: rotate(45deg);
      }
    }
  }
}
</style>
