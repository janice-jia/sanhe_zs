<script setup lang="ts">
</script>

<template>
  <div class="header">
    <div class="main">
      <div class="logo"></div>
      <h1>三河市教育研究中心</h1>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header{
  background: linear-gradient( 90deg, #6890FA 0%, #576DFF 100%);
  .main{
    width: 80%;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    .logo{
      width: 40px;
      height: 40px;
      background: #FAFAFA;
      border-radius: 10px 10px 10px 10px;
    }
    h1{
      margin-left: 12px;
      font-weight: 500;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 35px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
