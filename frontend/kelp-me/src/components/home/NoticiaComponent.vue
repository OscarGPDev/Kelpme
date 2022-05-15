<template>
    <div class="contenedor-noticias container">
        <h2 class="mb-5 pt-5">Noticias</h2>
        <template 
                v-for="noticia in 5"
                :key="noticia"
        >
        <h3>Titulo noticia</h3>
        <p class="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quam itaque temporibus quisquam minima, quibusdam blanditiis harum earum cupiditate nisi, similique neque nam in iste quae ullam! Nesciunt, harum laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cumque molestiae non voluptate debitis voluptatem deserunt quisquam, aperiam nobis ex aliquam corporis dolore iusto error nostrum nesciunt, nam tenetur excepturi.</p>

        </template>
    </div>

</template>

<script>
export default {

}
</script>

