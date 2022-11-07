# 小悦前端
技术选型：Vue3+Vue-router4+Vuex4+TailwindCSS 3+Vite2+工具库：Vueuse 8
项目介绍：
这是一个使用vite+vue3来实现的一个类似于小红书的项目，可以预览图片，放大图片，全文搜索图片，导航栏切换图片类型，下载图片，登录注册，然后开通vip，升级vip，微信登录，
QQ登录，可以分享微博，还有字符包登录还有扫码登录，兼容移动端，还有就是切换主题，极简白，极夜黑可以文件上传，还有反馈平台，还有就是有导航助手。

项目功能开发介绍：
使⽤ Tailwind 的 DarkMode 原理实现主题切换，和 Window.matchMedia onchange 方法来监听
使用 router 进行路由跳转，实现 QQ 登录完成之后当前页面退出到主页面
使⽤ infinite 结合 waterfall 实现长列表瀑布流效果
使用 vee-vaildata 实现用户和密码的前端表单校验以及登陆时人类行为验证，提高用户体验性
性能优化方面使用防抖，图片懒加载，数据懒加载，组件懒加载
使用阿里云 COS、腾讯云 OSS、图片裁剪、文件上传实现云存储
使用TailwindCSS+DarkMode实现主题切换，和 Window.matchMedia onchange 方法来监听系统主题变化、来实现跟随系统
