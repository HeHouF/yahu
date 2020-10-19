<template>
  <div id="app">

    <router-link to="/hello">qqq</router-link>

    <router-link to="/page1">page1</router-link>
 
    <!-- 通过路由设置的name值进行导航 -->
    <router-link to="/goods">page2</router-link>
 
    <!-- 使用编程式导航 -->
    <span @click="gotoPage1">gotoPage1</span>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   methods: {
      gotoPage1() {
        // 编程式导航
        this.$router.push('/page1')
      }
    },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
