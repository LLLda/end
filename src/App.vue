<!--
 * @Author: your name
 * @Date: 2021-10-27 11:07:33
 * @LastEditTime: 2021-10-27 17:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \end\src\App.vue
-->
<template>
  <div>
    <!-- 顶部栏 -->
    <el-header>
      <div class="top-header">
        <div class="left">微校菌</div>
        <div class="right">个人中心</div>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              text-color="#fff"
              default-active="1-1"
              class="el-meny-vertical-demo"
              @select="handleOpen"
            >
              <el-sub-menu index="1">
                <template #title>
                  <i class="el-icon-circle-plus-outline"></i>
                  <span>话题</span>
                </template>
                <el-menu-item index="alltopic"
                  >全部话题</el-menu-item
                >
                <el-menu-item index="admintopic">
                  官方话题</el-menu-item
                >
                <el-menu-item index="checktopic"
                  >话题审核</el-menu-item
                >
                <el-menu-item index="reporttopic"
                  >举报受理</el-menu-item
                >
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <i class="el-icon-menu"></i>
                  <span>活动</span>
                </template>
                <el-menu-item index="2-1"
                  >抽奖活动</el-menu-item
                >
                <el-menu-item index="2-2"
                  >竞赛活动</el-menu-item
                >
                <el-menu-item index="2-3"
                  >发帖活动</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item index="3">
                <i class="el-icon-user"></i>
                <span>用户</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-document"></i>
                <span>统计</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods:{
    handleOpen(index){
      this.$router.push(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.top-header {
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  background-color: #3d4349;
  margin: 0;
  color: #ffd04b;
  .left {
    display: inline-block;
    position: absolute;
    left: 50px;
  }
  .right {
    display: inline-block;
    position: absolute;
    right: 50px;
  }
}
.el-aside {
  text-align: center;
  width: 200px;
  height: 1000px;
  .el-menu {
    height: 1000px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
.el-main{
  padding: 0;
}
</style>
