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
import { apiHost } from './config.js';

console.log('ENV', window.NODE_ENV)

const socket = io(apiHost);
socket.on('connect', function() {
  console.log('connect');
});
socket.on('stream', function(p) {
  console.log('stream', p);
});
socket.on('disconnection', function() {
  console.log('disconnect');
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
