
<script>
import Sidebar from '@/components/sidebar/SidebarComponent'
import { sidebarWidth } from './components/sidebar/state';
// import { RouterLink, RouterView } from 'vue-router'

export default{
  components: { Sidebar },
  setup(){
    return { sidebarWidth }
  }
}

</script>


<template>
 <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>
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
