<template>
    <div class="container-xl">
        <h2 class="py-5 fw-bold fs-1 my-5">Conoce algunos de los usos recientes que se le dan al sargazo</h2>
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

</style>
