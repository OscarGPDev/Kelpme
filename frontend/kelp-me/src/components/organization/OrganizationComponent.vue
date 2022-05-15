<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="col-4">
        <img alt="organization logo" v-bind:src="image"/>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    image: String,

  }
}
</script>

<style scoped>
.container {
  margin: 10px
}

img {
  width: 100%;
  height: 100%;
}
</style>