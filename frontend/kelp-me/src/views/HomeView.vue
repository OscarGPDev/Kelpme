<template>
    <Inicial/>
    <Noticia/>
</template>

<script>
export default {
    components:{
        Inicial: defineAsyncComponent ( () => import('../components/Inicial.vue')),
        Noticia: defineAsyncComponent ( () => import('../components/Noticia.vue')),
    }
}
</script>

<style>

</style>