<script>
// import { computed } from "vue";
// import { useRoute } from "vue-router";
import { collapsed } from "./state";
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    console.log(props);
    console.log(props.to);
    // const route = useRoute();
    const isActive=false
    // const isActive = computed(() => route.path === props.to);
    // console.log(route,"route")
    console.log("Funciona");
    return { isActive, collapsed };
    
  },
};
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>