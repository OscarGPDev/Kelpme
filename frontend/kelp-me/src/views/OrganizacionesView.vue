<template>
  <div class="tittle">
    Organizaciones
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

<style>

.tittle {
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 700;
  color: #1C8388;
}
</style>

