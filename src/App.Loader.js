/**
 @author : Caven Chen
 @date : 2023-05-06
 */

import { createApp } from 'vue'

import * as DC from 'dvgis/dc-sdk'
import 'dvgis/dc-sdk/dist/dc.min.css'

const hub = createApp({})

global.Hub = hub

class AppLoader {
  constructor(app) {
    app.config.globalProperties.hub = hub
  }

  install() {
    global.DC = DC
    global.Hub = hub
  }
}

export default AppLoader
