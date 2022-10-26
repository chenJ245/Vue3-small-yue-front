import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 1. 获取当前路径下所有文件夹中的 inde.vue
    const components = import.meta.glob('./*/index.vue')
    // 2. 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      // 3. 利用 app.component 进行注册
      // console.log(componentName)
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
