<template>
    <img src="https://images.unsplash.com/photo-1604107197470-367bb5379ef6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mick-haupt-93xznCgt-_Y-unsplash.jpg" class="img-fluid" alt="Impacto-sargazo" width="800">
    <div class="container mt-5">
        <div class="row justify-content-between">
            <div class="col-md-5 tarjetas">
                <p>Toda la actividad de la ciudad depende del turista. De eso vivimos los prestadores de servicios, los restaurantes, los hoteles, y muchos negocios”, plantea José, que también es secretario de la Cooperativa Turística Mar Caribe</p>
            </div>

            <div class="col-md-5 tarjetas">
                <p>El problema -subraya- es que con tanto sargazo el visitante no puede meterse a la playa porque el agua está oscura.</p>
            </div>
            <div class="col-md-5 tarjetas">
                <p>Es lodo descompuesto que huele mal y que puede lastimar la piel. Y es ahí cuando todos nos vemos lastimados. </p>
            </div>
            
            <div class="col-md-5 tarjetas">
                <p>Porque la gente ya no acude a la playa, se va para otros lugares en busca de aguas limpias </p>
            </div>

            <div class="col-md-5 tarjetas boton-quiero">
                <button class="btn btn-success p-3">!Quiero Ayudar!</button>
            </div>

            <div class="col-md-5 tarjetas">
                <p>José hace hincapié en que necesitan que “las autoridades le echen más ganas” y “se tomen el problema del sargazo mucho más en serio”. Porque el trabajo de las más de 400 mil personas que viven del turismo en el estado depende de ello</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .tarjetas{
        
        border: 2px solid gray;
        margin-bottom: 2rem;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 700;
    }
    p{
        margin: 0;
        padding: 1rem 0;
    }

    .tarjetas:first-child{
        background-color: #add5fa;
    }
    .tarjetas:nth-child(2){
        background-color: #f9d99a;
    }
    .tarjetas:nth-child(3){
        background-color: #c5c5c8;
    }
    .tarjetas:nth-child(4){
        background-color: #b2e2f2;
    }
    .tarjetas:nth-child(6){
        background-color: #fabfb7;
    }

    .tarjetas.boton-quiero{
        border: none;
        background-color: transparent;
    }

</style>