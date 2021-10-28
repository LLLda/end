<!--
 * @Author: your name
 * @Date: 2021-10-27 16:38:52
 * @LastEditTime: 2021-10-27 17:30:16
 * @LastEditors: Please set LastEditors
 * @Description: 面包屑导航封装
 * @FilePath: \end\src\components\common\bread-crumb.vue
-->
<template>
<div class="bread-crumb">
  <el-breadcrumb separator="/" >
      <el-breadcrumb-item v-for="item in items" :key="item" :to="item.path">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .bread-crumb{
    padding: 10px 10px;
    height: 20px;
    background-color: #456789;
  }
</style>
