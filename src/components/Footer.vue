<script setup lang="ts">
</script>

<template>
  <div class="footer">
    <div class="main">
        <!-- <div class="logo"></div> -->
        <div class="desc">
          <!-- <p>©廊坊市教育云Copyright@2014 "廊坊市教育云"由廊坊市教育局提供技术支持</p>
          <p>《中华人民共和国信息产业部ICP/IP备案》</p> -->
        </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer{
  background: linear-gradient( 90deg, #6890FA 0%, #576DFF 100%);
  .main{
    width: 80%;
    margin: 0 auto;
    height: 160px;
    display: flex;
    align-items:center;
    justify-content: center;
    .logo{
      width: 40px;
      height: 40px;
      background: #FAFAFA;
      border-radius: 10px 10px 10px 10px;
    }
    .desc{
      margin-left: 20px;
      p{
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 30px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>
