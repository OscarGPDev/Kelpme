<template>
    <div class="contenedor-noticias container">
        <h2 class="mb-5 pt-5 fw-bold display-5 ">Noticias</h2>
        <p class="fw-bold fs-5">Conoce las noticias mas recientes del sargazo</p>
        <div class="row">
          <div class="col-md-4">
            <template 
                    v-for="noticia in noticias"
                    :key="noticia.id"
            >
              <div class="card">
                <img alt="imagen noticia" v-bind:src="noticia.imagen" class="card-img-top"/>
                <div class="card-body">
                  <h3 class="card-title">{{ noticia.titulo }}</h3>
                  <p class="mb-5 card-text">
                    {{noticia.descripcion}}
                  </p>
                    <button v-bind:src="noticia.url">ir a la noticia</button>
                </div>

              </div>

            </template>
          </div>
        </div>
    </div>

</template>

<script>
export default {
  props: {
    noticias:Array
  }
}
</script>

