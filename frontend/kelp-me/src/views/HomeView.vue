<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Inicial: defineAsyncComponent( () => import('@/components/Inicial.vue') )
    }
}
</script>

<template>

    <Inicial />

</template>
