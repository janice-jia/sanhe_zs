<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
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
          <div class="input_box error">
            <input type="text" />
          </div>
          <div class="error-msg">请输入正确的姓名格式</div>
        </div>

        <!-- 学校名称 -->
        <div class="form_item">
          <div class="label_box">学校名称</div>
          <div class="input_box">
            <input type="text" />
          </div>
          <div class="error-msg">请输入正确的姓名格式</div>
        </div>

        <!-- 作品名称 -->
        <div class="form_item">
          <div class="label_box">作品名称</div>
          <div class="input_box">
            <input type="text" />
          </div>
          <div class="error-msg">请输入正确的姓名格式</div>
        </div>

        <!-- 获奖证书编号 -->
        <div class="form_item">
          <div class="label_box"><span class="red">*</span>学校名称</div>
          <div class="input_box">
            <input type="text" />
          </div>
          <div class="error-msg">请输入正确的姓名格式</div>
        </div>

        <div class="search_btn">
          <button type="button">查询</button>
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
