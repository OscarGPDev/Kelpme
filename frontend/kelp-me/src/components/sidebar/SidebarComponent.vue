<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
   props:{},
   components: {SidebarLink},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    },
};
</script>

<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
    <h1>
        <span v-if="collapsed">
            <div>K</div>
            <div>!</div>
        </span>
        <span v-else>Kelp Me!</span>
    </h1>
    <!-- <SidebarLink to="/impacto" icon="fas fa-biohazard">Impacto</SidebarLink> -->
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/organizaciones" icon="fas fa-hand-holding-heart">Organizaciones</SidebarLink>
    <SidebarLink to="/impacto" icon="fas fa-biohazard">Impacto</SidebarLink>
    <SidebarLink to="/usos" icon="fas fa-people-carry">Usos</SidebarLink>

    <span class="collapse-icon" :class="{'rotate-180':collapsed}"  @click="toggleSidebar">
      <i class="fas fa-angle-double-left"></i>
    </span>
    
   
    </div>
</template>
<style>
    :root{
        --sidebar-bg-color: #2f855a;
        --sidebar-item-hover: #38a169;
        --sidebar-item-active: #276749;
    }
</style>
<style scoped>
    .sidebar {
        color: white;
        background-color: var(--sidebar-bg-color);
        float: left;
        position: fixed;
        z-index: 1;
        top:0;
        left: 0;
        bottom: 0;
        padding: 0.5em;
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
    }
    .collapse-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75em;
        color: rgba(255, 255, 255, 0.7);
        transition: 0.2s linear;
    }
    .rotate-180{
        transform: rotate(180deg);
        transition: 0.2s linear;
    }


</style>