import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import mDirecttives from './directives'
import useTheme from './utils/theme'
// import './permission'
import './styles/index.scss'
// 注册 svg-icons
import 'virtual:svg-icons-register'

useREM()
useTheme()
createApp(App).use(router).use(store).use(mLibs).use(mDirecttives).mount('#app')
