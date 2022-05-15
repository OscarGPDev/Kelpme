<template>
  <div>
    <input v-model="name" />
    <button @click="formatMsg">Show message</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      message: ""
    };
  },
  methods: {
    formatMsg() {
      this.message = `Hello ${this.name}`;
    },
  },
};
</script>