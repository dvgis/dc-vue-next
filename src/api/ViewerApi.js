/**
 * @Author: Caven
 * @Date: 2020-11-17 18:55:35
 */

class ViewerApi {
  constructor(viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }

  loadBaseLayer() {
    let baselayer = DC.ImageryLayerFactory.createGoogleImageryLayer({
      style: 'img',
    })
    this.viewer.addBaseLayer(baselayer)
  }
}

export default ViewerApi
