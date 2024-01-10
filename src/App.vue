<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>Vue 3 Router Example</h1>

  <!-- Utilizando router-link para navegar entre las vistas -->

  <router-link to="/">Home </router-link>
  <router-link to="/about">About</router-link>
  <router-view />

</template>

<script>



export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
