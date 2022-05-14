<template>
    <Inicial/>
    <Noticia/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
//  import Inicial from "../components/home/InicialComponent.vue";
//  import Noticia from "../components/home/NoticiaComponent.vue";

export default {
    components:{
     Inicial: defineAsyncComponent ( () => import('../components/home/InicialComponent.vue')),
     Noticia: defineAsyncComponent ( () => import('../components/home/NoticiaComponent.vue')),
     }
}
</script>

<style>

</style>

