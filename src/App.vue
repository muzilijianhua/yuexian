<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header title="悦鲜生活">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 内容区域 -->
    <transition mode="out-in">
    <router-view></router-view>
    </transition>

    <!-- 底部导航 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/eater">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cate"></span>
        <span class="mui-tab-label">吃客</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myself">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  created() {
    console.log(this)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
#app {
  overflow-x: hidden;
  padding-bottom: 50px;
}
.mui-bar-tab .mui-tab-item.mui-active {
  color: #fe0140;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s;
}
</style>
