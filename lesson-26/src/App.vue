<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-view v-slot="{ Component }">
    <transition name="router" mode="out-in" appear>
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
#app {
  text-align: center;
}
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.router-enter-active,
.router-leave-active {
  transition: all 0.2s ease-out;
}
.router-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
