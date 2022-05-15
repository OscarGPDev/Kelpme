<template>
    <div class="tittle">
        <div class="tittle">
         <p> Formulario para registrar una organización</p>
        </div>
    </div>
<form action="" @submit.prevent="pedido" v-on:submit.prevent="procesar();" name="form" id="form">
  <div class="formulario-container">
    <div class="form-left">
         <p>
          Name: <input v-model="variables.nombre" type="text" name="nombre" placeholder="Pepsi" class="form-control">
        </p>
        <p>
          Dirección: <input v-model="variables.direccion" type="text" name="direccion" placeholder="Galeana 120 col. El Salto GDL, Jalisco" class="form-control">
        </p>
        <p>
          Phone: <input v-model="variables.phone" type="text" name="telefono" placeholder="624 147 4078" class="form-control">
        </p>
        <p>
          E-mail: <input v-model="variables.email" type="text" name="correo" placeholder="pepsiCorreoReal@gmail.com" class="form-control">
        </p>
    </div>
    <div class="form-right">
        <p>
          Descripción: <textarea v-model="variables.descripcion" name="comentarios" id="comentarios" cols="60" rows="6" placeholder="Se encarga de usar el zargaso en la comida" class="form-control"></textarea>
        </p>
        <p>
          Imagen: <input type="file"  name="avatar" accept="image/png, image/jpeg" class="form-control">
        </p>
    </div>
     </div>
        <div class="container-submit-reset">
            <div class="submit">
                <input type="submit" value="Enviar">
             </div>
             <div class="reset">
                <p>
                    <input type="reset" value="Borrar información">
                </p>
             </div>  
        </div>
</form>
</template>

<script>

export default {
  data: () => ({
    variables: {
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
    }
  }),
  methods: {
    procesar() {
      //alert(this.variables.nombre);   
       
    }
  }
};
</script>

<style scoped>
.tittle{
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 700;
  color:#1C8388;
}
.formulario-container{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.form-left{
    margin: 20px;
    float: left;
    width: 50%;
}
.form-right{
    margin: 20px;
    float: right;
    width: 50%;
}
p{
    margin: 10px;
    padding: 0;
    color:#1C8388 ;
    text-align: left;
}

.submit {
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type=submit] {
  cursor: pointer; 
  font-size: 15px;
  font-weight: 600;
  color:#1C8388;
  transition: all 0.5s ease-in-out;
}
input[type=submit]:hover {
  background-color: #1C8388;
  color: #fff;
}
.reset {
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type=reset] {
  cursor: pointer; 
  font-size: 15px;
  font-weight: 600;
  color:#1C8388;
  transition: all 0.5s ease-in-out;
}
input[type=reset]:hover {
  background-color: #1C8388;
  color: #fff;
}
.container-submit-reset{
    display: flex;
     flex-direction: column;
    margin-top: 30px;
}
.submit{
    align-self:flex-end;
}
.reset{
   align-self:flex-end;
}
</style>
