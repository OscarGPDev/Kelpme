<template>
    <div class="container-fluid" id="info">
        <div class="row">
            <div class="col-md-6 d-flex align-items-center flex-column">
                <h2 class="my-5 pt-5 fw-bold fs-1">Kelp Me</h2>
                <p class="fs-5 my-5 pb-5">Es una página sin ánimo de lucro que logra juntar organizaciones para lograr concientizar a la población sobre el daño que está logrando hacer el sargazo y sin embargo se están proponiendo soluciones para poder reutilizar esto que nos da la naturaleza</p>
            </div>
            <div class="col-md-6">
                <div class="row justify-content-around">

                    <div class="col-5 my-5 contendor-objetivos">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                        <h3 class="mt-4">Cuidar</h3>
                        <p class="w-75 mx-auto">Cuidar y concientizar de aquellos sitios que son importante para nuestro país</p>
                    </div>

                    <div class="col-5 my-5 contendor-objetivos">
                        <i class="fa-solid fa-hands-praying"></i>
                        <h3 class="mt-4">Sumar</h3>
                        <p class="w-75 mx-auto">Cada granito de arena es escencial para llegar a nuestro objetivo</p>
                    </div>
                    
                    <div class="col-5 my-5 contendor-objetivos">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                        <h3 class="mt-4">Concientizar</h3>
                        <p class="w-75 mx-auto">Exponer el verdadero problema y lograr que más personas tengan información</p>
                    </div>

                    <div class="col-5 my-5 contendor-objetivos">
                        <i class="fa-solid fa-book-atlas"></i>
                        <h3 class="mt-4">Educar</h3>
                        <p class="w-75 mx-auto">Mostrar las soluciones existentes y viables que existen</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    i{
        font-size: 4rem;
        color: white;
    }
    .container-fluid{
        background: #16a8af;
        color: white;
    }
    .contendor-objetivos{
        border-left: 2px solid white;
        border-right: 2px solid white;
    }
</style>