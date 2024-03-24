<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/search">About</RouterLink>
            </nav>
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
  width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top:0;
  left: 50%;
  margin-left: -800px ;
  // padding: 0 2rem;
  header {
    clear: both;
    line-height: 1.5;
    max-height: 100vh;
  }

  .wrapper{
    width: 880px;
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
    .downbox{
      width: 880px;
      height: 570px;
      background: #FFFFFF;
      box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.08);
      border-radius: 20px 20px 20px 20px;
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
