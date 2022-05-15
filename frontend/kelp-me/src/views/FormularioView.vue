<template>
    <div class="tittle">
        <div class="tittle">
         <p> Formulario para registrar una organización</p>
        </div>
    </div>
  <div class="formulario container">
    <div class="form-left">
     <form action="">
         <p>
          Name: <input type="text" name="nombre" placeholder="Erika Machain" class="form-control">
        </p>
        <p>
          Dirección: <input type="text" name="direccion" placeholder="Galeana 120 col. El Salto GDL, Jalisco" class="form-control">
        </p>
        <p>
          Phone: <input type="text" name="telefono" placeholder="624 147 4078" class="form-control">
        </p>
        <p>
          E-mail: <input type="text" name="correo" placeholder="pepsiCorreoReal@gmail.com" class="form-control">
        </p>
        
     </form>
</div>
    <div class="form-right">
        <p>
          Descripción: <textarea name="comentarios" id="comentarios" cols="47" rows="4" placeholder="Se encarga de usar el zargaso en la comida" class="form-control"></textarea>
        </p>
        <p>
          Phone: <input type="file"  name="avatar" accept="image/png, image/jpeg" class="form-control">
        </p>
    </div>
     </div>

        <div class="submit">
          <input type="submit" value="Send">
        </div>
</template>

<script>

</script>

<style scoped>
.tittle{
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 700;
  color:#0E46C6 ;
}
.form {
    margin: 20px;
    padding: 20px;
}
.form-left{
    float: left;
    width: 40%;
}
.form-right{
    float: right;
    width: 50%;
}
p{
    margin: 0;
    padding: 0;
    color:#4C78DC ;
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
  color:#4C78DC ;;
  transition: all 0.5s ease-in-out;
}
input[type=submit]:hover {
  background-color: #4C78DC ;;
  color: #fff;
}
</style>
