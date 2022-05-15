<template>
    <section class="d-flex flex-column justify-content-center align-items-center">
        <h1>Sargazo</h1>
        <h2 class="mb-5">¿Bueno o malo?</h2>

        <a href="#info" class="btn btn-outline-blue mt-3"> Quiero saber más </a>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    section{
        width: 100%;
        height: 100vh;
        background-image: url('../../assets/img/algas.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
        
    }

    h1, h2{
        font-weight: 800;
        color: #fff;
        font-size: 4rem;
        text-align: left; 
        color: #fff; 
        text-shadow: 0 1px 0 #ddd, 0 2px 0 #ccc, 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 0 #acacac, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15);
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