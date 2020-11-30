import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 自适应
const setRem = function() {
    // 当前屏幕宽度
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth
    clientWidth < 1366 && (clientWidth = 1366)
    // 设计稿宽度1920
    const per = clientWidth / 1366
    //默认1rem = 16px
    document.documentElement.style.fontSize = per * 16 + 'px'
}
window.onresize = setRem
setRem()
