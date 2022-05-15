<template>
  <div class="tittle">
    Organizaciones
  </div>
  <div class="toform">
    <router-link to="/formulario"> 
      ¿Quieres registrar una organización?
    </router-link> 
  </div>
  <div class="container-organizaciones">
    <div class="organizaciones">
      <div class="organizaciones-tittle">
        Organizaciones
      </div>
      
    </div>
  </div>
 
        


  <router-link to="/formulario">
    ¿Quieres registrar una organización?
  </router-link>
<OrganizationComponent v-for="org in this.organizaciones" :name="org.nombre" :key="org.id" :description="org.descripcion" :image="org.imagen" />

</template>

<script>
import OrganizationComponent from "@/components/organization/OrganizationComponent";
export default {
  components: {OrganizationComponent},
  data: () => ({
    organizaciones: []
  }),
  setup() {

  },
  created() {
    fetch(`${process.env.VUE_APP_KELP_ME_API_URL}/ObtenerOrganizaciones`,{method: "GET",}).then(res => {
      // a non-200 response code
      if (!res.ok) {
        // create error instance with HTTP status text
        console.log("erro")
      }

      return res.json();
    })
        .then(json => {
          // set the response data
          console.log(json)
          this.organizaciones = json;
          console.log(this.organizaciones);
        })
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
.container-organizaciones{
  margin-left: 25px;
  display: flex;
  border: 2.5px solid #1C8388;
  width: 90%;
}
.organizaciones{
 margin: 15px;
 flex-direction: column;

}
</style>

