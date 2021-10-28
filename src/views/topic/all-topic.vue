<!--
 * @Author: your name
 * @Date: 2021-10-27 11:07:33
 * @LastEditTime: 2021-10-27 17:20:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \end\src\views\all-topic.vue
-->
<template>
  <div class="about">
    <Breadcrumb :items="breadcrumb"></Breadcrumb>
    全部话题
  </div>
</template>

<script>
export default {
  data(){
    return {
      breadcrumb:[
        {
          name:'全部话题',
          path:'/alltopic'
        },
        {
          name:'话题详情',
          path:'/detailtopic'
        },
      ]
    }
  }
}
</script>