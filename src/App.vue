<template>
  <div>
    <div
      class="rounded-3xl bg-dark-300"
      style="width: 200px; height: 200px"
    ></div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'
export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
