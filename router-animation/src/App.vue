<template>
  <div>
    <div class="links">
      <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
      <router-link to="/about"><i class="fa-solid fa-address-card"></i></router-link>
      <router-link to="/projects"><i class="fa-solid fa-diagram-project"></i></router-link>
      <router-link to="/contact"><i class="fa-solid fa-comment-dots"></i></router-link>
    </div>

    <transition name="router" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<style >
.links {
  position: absolute;
  gap: 10px;
  z-index: 999;
  bottom: 10%;
  left: 20%;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px;
  border-radius: 20px;
}

.links > * {
  margin: 8px 18px;
  font-size: 35px;
  text-decoration: none;
  color: #fff;
}
/* .route-enter-from {
  opacity: 0;
  transform: translateY(-500px);
}
.route-enter-from:last-child {
  opacity: 0;
  transform: translateY(500px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.8s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(500px);
} */
.router-enter-active {
  animation: bounce-in 1s;
}
.router-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

</style>
