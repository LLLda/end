/*
 * @Author: your name
 * @Date: 2021-10-27 11:07:33
 * @LastEditTime: 2021-10-27 16:50:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \end\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Breadcrumb from './components/common/bread-crumb.vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('Breadcrumb', Breadcrumb)

app.use(store).use(router).mount('#app')