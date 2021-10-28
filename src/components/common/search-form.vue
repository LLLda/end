<!--
 * @Author: your name
 * @Date: 2021-10-28 11:10:01
 * @LastEditTime: 2021-10-28 14:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \end\src\components\topic-form.vue
-->
<template>
  <el-form :inline="true" ref="search" :model="search" label-width="auto">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-form-item label="发布用户">
          <el-input v-model="search.user" placeholder="请输入发布人"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="话题标题">
          <el-input v-model="search.header" placeholder="请输入话题标题"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="话题内容">
          <el-input v-model="search.content" placeholder="请输入话题内容"></el-input>
        </el-form-item>
      </el-col>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="话题类别">
            <el-select v-model="search.class" placeholder="请选择话题类别">
              <el-option v-for="item in option" :key="item" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="发布时间">
            <el-date-picker
              v-model="search.date"
              type="daterange"
              start-placeholder="选择开始时间"
              end-placeholder="选择结束时间"
              range-separator="—"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'Topicform',
  data() {
    return {
      search: {
        user: '',
        header: '',
        content: '',
        date: '',
        class: ''
      },
      options: [
        {
          label: '分类1',
          value: '分类1'
        }
      ]
    }
  }
}
</script>
