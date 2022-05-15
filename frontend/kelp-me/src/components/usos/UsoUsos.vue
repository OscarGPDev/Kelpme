
<template>
<div class="row justify-content-between">
    <div class="col-md-4 mb-5" v-for="uso in usos"
                     :key="uso">
        <div class="card">
            <img :src="uso.imagen" class="card-img-top mx-auto mt-4" alt="user">
            <div class="card-body">
                <h3 class="card-title">{{uso.titulo}}</h3>
                <p class="card-text my-5">{{uso.texto}}</p>
            </div>
        </div>

    </div>
</div>

</template>

<script>

export default {

    data(){
        return{
            usos: [
                {
                    imagen: require("../../assets/img/profile1.jpg"),
                    titulo: "Productos de papel",
                    texto: "Uno de los productos que más se están haciendo con sargazo son libretas y papel que también se puede utilizar para embalaje y manualidades. Es un material amigable, pues evita el uso de árboles y le da una nueva vida a esta alga marina. Bajo esta misma línea, también se han hecho portavasos y porta menús para restaurantes."
                },
                {
                    imagen: require("../../assets/img/profile2.jpg"),
                    titulo: "Productos cosméticos y para el cuidado de la piel",
                    texto: "Uno de los productos que más se están haciendo con sargazo son libretas y papel que también se puede utilizar para embalaje y manualidades. Es un material amigable, pues evita el uso de árboles y le da una nueva vida a esta alga marina. Bajo esta misma línea, también se han hecho portavasos y porta menús para restaurantes."
                },
                {
                    imagen: require("../../assets/img/profile3.jpg"),
                    titulo: "Cócteles",
                    texto: "La industria de alimentos y bebidas no se queda atrás en el uso del sargazo. El primer cóctel a base de esta alga marina ya fue creado. Se trata del “pineapple gift”, cuyo nombre es un tributo a la cultura maya que en la antigüedad ofrecía una piña como regalo de bienvenida a sus invitados."
                },
                {
                    imagen: require("../../assets/img/profile4.jpg"),
                    titulo: "Ladrillos para construcción de viviendas",
                    texto: "Probablemente uno de los mejores usos del sargazo en las playas de Caribe es como material para la producción de ladrillos. Los ladrillos de sargazo se fabrican con la misma técnica que los de adobe y el uso del alga puede disminuir el costo total de la construcción de las viviendas hasta en un 50%. Este proyecto ha sido creado con la idea de ayudar a las personas más necesitadas que por algún motivo no tienen vivienda o la suya está en muy malas condiciones para vivir apropiadamente."
                },
                {
                    imagen: require("../../assets/img/profile5.jpg"),
                    titulo: "Fertilizante",
                    texto: "Desde hace algunos años en la zona de Tulum familias de agricultores comenzaron a utilizar el sargazo para fertilizar sus sembradíos. Aprovechan el alga como abono natural y herbicida para mejorar sus cultivos de productos como maíz, calabaza, chile y frijol."
                },
            ]
        }
    }

}
</script>

<style scoped>
    img{
        border-radius: 100%;
        width: 40%;
    }

    .card{
        height: 100%;
    }
</style>