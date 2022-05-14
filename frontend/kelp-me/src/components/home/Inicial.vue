<template>
    <section class="d-flex flex-column justify-content-center align-items-center">
        <h1>Sargazo</h1>
        <h2 class="mb-5">¿Bueno o malo?</h2>

        <button class="btn btn-outline-blue mt-3"> Quiero saber más </button>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    section{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url('../../assets/img/algas.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
        
    }

    h1, h2{
        color: #fff;
        font-size: 4rem;
    }

    .btn-outline-blue{
        background-color: rgb(123, 179, 179);
        color: white;
        padding: 1rem 2rem;
        border: 1px solid rgb(146, 146, 146);
        border-radius: .5rem;
    }

    .btn-outline-blue:hover{
        background-color: rgb(141, 202, 202);
    }

</style>