<template>
    <Inicial/>
    <div class="row">
      <div class="col-md-6">
        <Noticia :noticias="noticias"/>
      </div>
      <div class="col-md-6">
        <VideoHome/>
      </div>
    </div>
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
  .row{
    background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
  }
</style>
