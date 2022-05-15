<template>
    <div class="row">
      <div class="col-md-6">
        <VideoImpacto/>
      </div>
      <div class="col-md-6">
        <AfectacionImpacto/>
      </div>
      <div class="col-md-12">
        <NoticiaImpacto/>
      </div>
    </div>
</template>

<script>


import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomeView',
  components: {
      AfectacionImpacto: defineAsyncComponent ( () => import('../components/impacto/AfectacionImpacto.vue')),
      VideoImpacto: defineAsyncComponent ( () => import('../components/impacto/VideoImpacto.vue')),
      NoticiaImpacto: defineAsyncComponent ( () => import('../components/impacto/NoticiaImpacto.vue')),
  }
}
</script>

<style scoped>
  .row{
    background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
  }
</style>
