<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Inicial: defineAsyncComponent( () => import('@/components/home/Inicial.vue') )
    }
}
</script>

<template>

    <Inicial />

</template>
