<template>
    <Inicial/>
    <InfoComponent/>

      <Noticia :noticias="noticias"/>

      <VideoHome/>

</template>

<script>
import { defineAsyncComponent } from 'vue'
//  import Inicial from "../components/home/InicialComponent.vue";
//  import Noticia from "../components/home/NoticiaComponent.vue";

export default {
    components:{
     Inicial: defineAsyncComponent ( () => import('../components/home/InicialComponent.vue')),
     Noticia: defineAsyncComponent ( () => import('../components/home/NoticiaComponent.vue')),
     VideoHome: defineAsyncComponent ( () => import('../components/home/VideoHome.vue')),
     InfoComponent: defineAsyncComponent ( () => import('../components/home/InfoComponent.vue')),
     },
  data: () => ({
    noticias: []
  }),
  created() {
    fetch(`${process.env.VUE_APP_KELP_ME_API_URL}/Noticias`,{method: "GET",}).then(res => {
      // a non-200 response code
      if (!res.ok) {
        // create error instance with HTTP status text
        console.log("erro")
      }

      return res.json();
    })
        .then(json => {
          // set the response data
          console.log(json)
          this.noticias = json;
          console.log(this.noticias);
        })
  }
}
</script>

<style scoped>

</style>
