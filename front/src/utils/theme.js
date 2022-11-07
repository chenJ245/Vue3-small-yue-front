import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
import { watch } from 'vue'
import store from '../store'

/**
 * 监听系统主题变更
 */
let matchMedia
const watchSystemThemeChange = () => {
  //仅需一次初始化 
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变化
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM)
  }
}

/**
 * 变更主题
 * @param {*} theme 主题的标记
 */
const changeTheme = (theme) => {
  // html 的 class
  let themeClassName = ''

  switch(theme) {
    case THEME_LIGHT:
      themeClassName = 'light'
      break
    case THEME_DARK:
      themeClassName = 'dark'
      break
    case THEME_SYSTEM:
      // 调用方法，监听系统主题变化
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }

  // 修改 html 的 class
  document.querySelector('html').className = themeClassName
}

/**
 * 初始化主题
 */
export default () => {
  // 1. 当主题发生改变时，或者当进入系统时，可以进行 html class 的配置
  watch(
    () => store.getters.themeType, changeTheme, {
      // 初始执行一次
      immediate: true
    }
  )
}