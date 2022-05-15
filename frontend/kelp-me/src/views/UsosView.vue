<template>
    <div class="container-xl">
        <h2 class="py-5 fw-bold fs-1">Conoce algunos de los usos recientes que se le dan al sargazo</h2>
        <UsoUsos/>
      
    </div>
</template>

<script>


import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomeView',
  components: {
      UsoUsos: defineAsyncComponent ( () => import('../components/usos/UsoUsos.vue')),
  }
}
</script>

<style scoped>
  .container-xl{
    background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
  }
</style>
