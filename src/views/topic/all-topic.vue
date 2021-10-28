<!--
 * @Author: your name
 * @Date: 2021-10-27 11:07:33
 * @LastEditTime: 2021-10-28 14:11:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \end\src\views\all-topic.vue
-->
<template>
    <Breadcrumb :items="breadcrumb"></Breadcrumb>
    <div class="container">
      <Header content="全部话题"></Header>
      <Searchform></Searchform>
      <!-- 分割线 -->
      <el-divider></el-divider>
    </div>
</template>

<script>
export default {
  data(){
    return {
      // 导航栏
      breadcrumb:[
        {
          name:'全部话题',
          path:'/alltopic'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    padding: 20px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px 5px 0 0;
    height: 855px;
  }
</style>