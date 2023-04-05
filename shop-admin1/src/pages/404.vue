<!-- 页面 -->
<template>
<div>
    <el-result
        icon="warning"
        title="404提示"
        sub-title="你找的页面走丢了"
      >
        <template #extra>
          <el-button type="primary " @click="$router.push('/')">回到首页</el-button>
        </template>
      </el-result>
</div>
</template>
<!--vue -->
<script>
export default {
data() {
return {
//声明的属性
}
},
//生命周期函数
mounted() {
},
//调用方法
methods: {},
//监听器
watch: {},
// 计算属性
computed: {},
//过滤器
filters: {},
//自定义指令
directives: {},
}
</script>
<!-- css样式 -->
<style scoped>
</style>