<template>
  <div class="index">
    <viewer @on-viewer-created="viewerCreatedHandler"></viewer>
  </div>
</template>

<script>
import Viewer from '@/components/Viewer'
import ViewerApi from '@/api/ViewerApi'
export default {
  name: 'Index',
  components: {
    Viewer,
  },
  data() {
    return {}
  },
  methods: {
    viewerCreatedHandler(viewer) {
      let viewerApi = new ViewerApi(viewer)
      viewerApi.loadBaseLayer()
      global.viewerApi = viewerApi
    },
  },
}
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
