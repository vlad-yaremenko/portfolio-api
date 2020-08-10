<template>
  <router-link :to="{ name: 'home' }" class="logo">
    <img src="/assets/app/img/logo.png" alt="Vlad Yaremenko">
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
.logo {
  font-size: $main-nav-font-size;
  width: 50px;
  display: inline-flex;
  align-items: center;

  &::before {
    display: none;
  }

  img {
    width: 100%;
  }
}
</style>
