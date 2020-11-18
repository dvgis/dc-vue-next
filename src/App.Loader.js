/**
 * @Author: Caven
 * @Date: 2020-11-17 18:21:49
 */

import { createApp } from 'vue'
import DC from 'dvgis/dc-sdk/dist/dc.base.min'
import DcCore from 'dvgis/dc-sdk/dist/dc.core.min'
import DcPlugins from 'dvgis/dc-plugins/dist/dc.plugins.min'
import 'dvgis/dc-sdk/dist/dc.core.min.css'

const hub = createApp({})

global.Hub = hub

class AppLoader {
  constructor(app) {
    app.config.globalProperties.hub = hub
  }

  install() {
    global.DC = DC
    global.Hub = hub
    DC.use(DcCore)
    DC.use(DcPlugins)
  }
}

export default AppLoader
