<template>
  <nav class="nav">
    <ul>
      <!-- <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'blog' }">Blog</router-link>
      </li> -->
      <li>
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
.nav {
  font-size: $main-nav-font-size;
  margin: 0 auto;
  width: 50%;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    li {
      list-style-type: none;
    }
  }
}
</style>
