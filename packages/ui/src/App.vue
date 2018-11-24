<template>
  <div id="app">
    <div id="nav">
      <button type="button" v-on:click="onClick">emit lol</button>
      <router-link to="/">Chat</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import io from 'socket.io-client';

const co = 'http://' + window.location.hostname + ':3000';
console.log(co);

const socket = io(co);
socket.on('connect', function() {
  console.log('totoloo');
});
socket.on('stream', function(p) {
  console.log('stream', p);
});

export default {
  name: 'App',
  mounted() {
    this.$store.commit('newUser');
  },
  methods: {
    onClick() {
      socket.emit('lol', 'poin poin');
    },
  },
  beforeDestroy() {
    socket.disconnect();
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
