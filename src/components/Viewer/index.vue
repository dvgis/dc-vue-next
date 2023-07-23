<template>
  <div :id="mapId"></div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Viewer',
  props: {
    mapId: {
      type: String,
      default: 'viewer-container',
    },
  },
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new DC.Viewer(this.mapId)
      this.$emit('on-viewer-created', viewer)
    },
  },
  mounted() {
    DC.ready().then(this.initViewer)
  },
})
</script>
