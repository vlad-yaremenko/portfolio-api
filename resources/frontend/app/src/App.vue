<template>
  <div id="app">
    <header :class="['header', { 'home-style': isHome }]">
      <Logo />

      <Nav class="main-nav" />
    </header>

    <main :class="['content', { 'home-style': isHome }]">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Logo,
  },
  data() {
    return {
      transitionName: 'from-home',
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
  },
  watch: {
    $route(to, from) {
      const fromHome = from.name === 'home';
      const toHome = to.name === 'home';

      if (fromHome) {
        this.transitionName = 'from-home';
      } else if (toHome) {
        this.transitionName = 'to-home';
      } else {
        this.transitionName = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  min-height: 100vh;
  max-width: $max-screen-width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 100%;
  margin-top: $header-height;

  &.home-style {
    margin-top: 0;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: $max-screen-width;
  z-index: $z-main-nav;
  padding: $base-padding;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: $bg-color;
  border-bottom: $border-size solid $main-color;
  height: $header-height;
  transition: top $slow-anim-duration linear;

  &.home-style {
    top: 100%;
    transform: translate(-50%, -100%);
    background-color: transparent;
  }

  .main-nav {
    width: 100%;
  }
}

.from-home {
  &-enter-active,
  &-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    transition: all $slow-anim-duration linear;
  }

  &-enter-active {
    top: $header-height;
    z-index: -10;
  }
  &-leave-active {
    background: $bg-color;
  }
  &-leave-to {
    transform: translateY(calc(-100% - #{$header-height}));
  }
}

.to-home {
  &-enter-active,
  &-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    transition: all $slow-anim-duration linear;
  }

  &-leave-active {
    top: $header-height;
    z-index: -10;
  }
  &-enter-active {
    background: $bg-color;
    transform: translateY(calc(-100% - #{$header-height}));
    z-index: -1;
  }
  &-enter-to {
    transform: translateY(0);
  }
}
</style>
