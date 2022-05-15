<template>
    <h2 class="mb-5 pt-5 fw-bold fs-1 titulo">Impacto del sargazo</h2>
    <div class="row">
      <div class="col-md-6 container-izquierda">
        <VideoImpacto/>
      </div>
      <div class="col-md-6 container-derecha">
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
  .container-derecha{

      background: #16a8af;
      color: white;

  }

  .container-izquierda{

        background: rgb(245, 245, 245);

  }
  
  .titulo{
    color: #16a8af;
  }
</style>
