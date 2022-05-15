<template>
  <div class="container-organizaciones">
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

.container-organizaciones{
  border: 1px solid #1C8388;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.row{
  display: flex;
  flex-direction: row;
}
h3{
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: #1C8388;
}
p{
  font-size: 15px;
  margin-top: 10px;
  color: #1C8388;
}
</style>