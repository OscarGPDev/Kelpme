<template>
  <div class="tittle">
    <div class="tittle">
      <p> Formulario para registrar una organización</p>
    </div>
  </div>
  <form id="form" action="" name="form" @submit.prevent="pedido" v-on:submit.prevent="procesar();">
    <div class="formulario-container">
      <div class="form-left">
        <p>
          Name: <input v-model="variables.nombre" class="form-control" name="nombre" placeholder="Pepsi" type="text">
        </p>
        <p>
          Dirección: <input v-model="variables.direccion" class="form-control" name="direccion"
                            placeholder="Galeana 120 col. El Salto GDL, Jalisco" type="text">
        </p>
        <p>
          Phone: <input v-model="variables.telefono" class="form-control" name="telefono" placeholder="624 147 4078"
                        type="text">
        </p>
        <p>
          E-mail: <input v-model="variables.email" class="form-control" name="correo"
                         placeholder="pepsiCorreoReal@gmail.com"
                         type="text">
        </p>
      </div>
      <div class="form-right">
        <p>
          Descripción: <textarea id="comentarios" v-model="variables.descripcion" class="form-control" cols="60"
                                 name="comentarios"
                                 placeholder="Se encarga de usar el zargaso en la comida"
                                 rows="6"></textarea>
        </p>
        <p>
          Imagen: <input id="imagen" accept="image/png, image/jpeg" class="form-control" name="avatar" type="file">
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

import {convertImageToB64} from "@/functions/processImages";

export default {
  data: () => ({
    variables: {
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
      imagenFormulario: null
    }
  }),
  setup() {
    console.log(process.env.VUE_APP_KELP_ME_API_URL);
  },
  methods: {
    async procesar() {
      //alert(this.variables.nombre);
      this.variables.imagenFormulario = document.getElementById("imagen").files[0]
      await fetch(`${process.env.VUE_APP_KELP_ME_API_URL}/AgregarOrganizacion`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...this.variables,
          imagen: await convertImageToB64(this.variables.imagenFormulario)
        })
      })
      console.log("se proceso", this.variables)
    }
  }
};
</script>

<style scoped>
.tittle {
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 700;
  color: #1C8388;
}

.formulario-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.form-left {
  margin: 20px;
  float: left;
  width: 50%;
}

.form-right {
  margin: 20px;
  float: right;
  width: 50%;
}

p {
  margin: 10px;
  padding: 0;
  color: #1C8388;
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
  color: #1C8388;
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
  color: #1C8388;
  transition: all 0.5s ease-in-out;
}

input[type=reset]:hover {
  background-color: #1C8388;
  color: #fff;
}

.container-submit-reset {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.submit {
  align-self: flex-end;
}

.reset {
  align-self: flex-end;
}
</style>
