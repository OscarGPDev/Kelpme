<<<<<<< HEAD
<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from './components/sidebar/state';
import { RouterLink, RouterView } from 'vue-router'

export default{
  components: { Sidebar },
  setup(){
    return { sidebarWidth }
=======
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
</template>

<script>


export default {
  name: 'App',
  components: {
    
>>>>>>> 2a3d63480a2e1b7251764875bf2362c6b3fd7ffd
  }
}
</script>

<<<<<<< HEAD
<template>
 <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

=======
>>>>>>> 2a3d63480a2e1b7251764875bf2362c6b3fd7ffd
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
