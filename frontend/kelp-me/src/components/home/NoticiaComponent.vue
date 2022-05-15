<template>
    <div class="contenedor-noticias container">
        <h2 class="mb-5 pt-5">Noticias</h2>
        <template 
                v-for="noticia in noticias"
                :key="noticia.id"
        >
        <h3>{{ noticia.titulo }}</h3>
        <p class="mb-5">
          {{noticia.descripcion}}
        </p>
          <img alt="organization logo" v-bind:src="noticia.imagen"/>
          <button v-bind:src="noticia.url">ir a la noticia</button>
        </template>
    </div>

</template>

<script>
export default {
  props: {
    noticias:Array
  }
}
</script>

