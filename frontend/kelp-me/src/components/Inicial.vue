<template>
    <section class="d-flex flex-column justify-content-center align-items-center">
        <h1>Sargazo</h1>
        <h2>¿Bueno o malo?</h2>

        <button class="btn btn-outline-primary mt-3"> Quiero saber más </button>
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
        background-image: url('../assets/img/WorldOceansDay-bro.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        margin: 0 auto;
        background-color:  #22c1c3;
        
    }

    h1, h2{
        color: #3D80CC;
        font-size: 3rem;
    }
</style>