<template>
  <div class="wrapper">
    <p class="loader">Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.loader {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink{
  0% {
    opacity: 1;
  }
  50% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
</style>
