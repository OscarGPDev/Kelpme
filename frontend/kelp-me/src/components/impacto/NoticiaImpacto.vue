<template>
    <div class="row my-5 contenedor-pregunta">
        <div class="col-md-6 d-flex justify-content-center align-items-center ">
            <h2 class="fw-bold w-75">¿Cuales son los principales problemas que nos trae el sargazo?</h2>

        </div>
        <div class="col-md-6">
            <img src="https://images.unsplash.com/photo-1604107197470-367bb5379ef6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mick-haupt-93xznCgt-_Y-unsplash.jpg" class="img-fluid my-5" alt="Impacto-sargazo" width="800">

        </div>
    </div>
    <div class="mt-5">
        <div class="row justify-content-between">
            <div class="col-md-6 tarjetas">
                <p>Toda la actividad de la ciudad depende del turista. De eso vivimos los prestadores de servicios, los restaurantes, los hoteles, y muchos negocios”, plantea José, que también es secretario de la Cooperativa Turística Mar Caribe</p>
            </div>
            <div class="col-md-6">
                <img src="../../assets/img/HotelBooking-bro.svg" alt="turista" class="img-fluid svg">
            </div>

        </div>

        <div class="row justify-content-between">
            <div class="col-md-6">
                <img src="../../assets/img/Waterpollution-amico.svg" alt="turista" class="img-fluid svg">
            </div>
            <div class="col-md-6 tarjetas">
                <p>El problema -subraya- es que con tanto sargazo el visitante no puede meterse a la playa porque el agua está oscura.</p>
            </div>
        </div>

        <div class="row justify-content-between">
            <div class="col-md-6 tarjetas">
                <p>Es lodo descompuesto que huele mal y que puede lastimar la piel. Y es ahí cuando todos nos vemos lastimados. </p>
            </div>
            <div class="col-md-6">
                <img src="../../assets/img/Badidea-cuate.svg" alt="turista" class="img-fluid svg">
            </div>
        </div>

        <div class="row justify-content-between">
            <div class="col-md-6">
                <img src="../../assets/img/Beach-amico.svg" alt="turista" class="img-fluid svg">
            </div>
            <div class="col-md-6 tarjetas">
                <p>Porque la gente ya no acude a la playa, se va para otros lugares en busca de aguas limpias </p>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-md-6 tarjetas">
                <p>José hace hincapié en que necesitan que “las autoridades le echen más ganas” y “se tomen el problema del sargazo mucho más en serio”. Porque el trabajo de las más de 400 mil personas que viven del turismo en el estado depende de ello</p>
            </div>
            <div class="col-md-6">
                <img src="../../assets/img/Bearmarket-amico.svg" alt="turista" class="img-fluid svg">
            </div>
        </div>

            <button @click="goToOrganizaciones" class="btn btn-ayudar py-3 px-4 my-5">!Quiero Ayudar!</button>


    </div>


</template>

<script>
export default {
    methods:{
        goToOrganizaciones(){
            this.$router.push({name: 'Organizaciones'})
        }
    }
}
</script>

<style scoped>
    .tarjetas{

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 700;
        color: rgb(245, 243, 243);
    }
    p{
        margin: 0;
        padding: 1rem 0;
    }

    .tarjetas:first-child{
        background-color: #16a8af;
    }
    .tarjetas:nth-child(2){
        background-color: #16a8af;
    }


    .tarjetas.boton-quiero{
        border: none;
        background-color: transparent;
    }

    .svg{
        width: 50%;
    }

    .btn-ayudar{
        color: white;
        background: #16a8af;
        border-radius: 2rem;
    }


    .contenedor-pregunta{
                background: rgb(245, 245, 245);
    }
</style>