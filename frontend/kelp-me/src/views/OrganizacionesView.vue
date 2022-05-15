<template>
  <div class="tittle">
    Organizaciones
  </div>
  <div class="toform">
    <router-link to="/formulario"> 
      ¿Quieres registrar una organización?
    </router-link> 
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
  color:#1C8388;
}
.toform{
  width: 90%;
  text-align: end;

}
a{
  color: #1C8388;
  text-decoration: none;
  transition: color 0.8s ease-in-out, box-shadow 0.8s ease-in-out;
}
a:hover{
  background-color: #1C8388;
  color: white;
  border-radius: 5px;
  transition: color 0.8s ease-in-out, box-shadow 0.8s ease-in-out;
}
</style>

