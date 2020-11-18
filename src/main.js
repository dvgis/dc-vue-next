/**
 * @Author: Caven
 * @Date: 2020-11-16 18:12:40
 */

import { createApp } from 'vue'
import AppLoader from '@/App.Loader'
;(async () => {
  Promise.all([import('./App.vue'), import('./router')]).then(
    ([{ default: App }, { default: router }]) => {
      const app = createApp(App)
      let appLoader = new AppLoader(app)
      appLoader.install()
      app.use(router)
      app.mount('#app')
    }
  )
})()
