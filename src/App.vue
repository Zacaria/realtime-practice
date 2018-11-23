<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chat</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.commit('newUser');
  },
};
</script>

<style lang="scss">
#app,
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $primary;
  color: $font-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $secondary;
    &.router-link-exact-active {
      color: $secondary-accent;
    }
  }
}
</style>
