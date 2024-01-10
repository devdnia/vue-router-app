<!-- Home.vue -->
<template>
  <div>
    <h2>Home</h2>
    <p>Contingut de la pàgina principal</p>

    <!-- Afegim un botó que farà la navegació programàtica -->
    <button @click="navigateToAbout">Anar a About</button>
  </div>
</template>

<script>
export default {
  methods: {
    // Mètode per fer la navegació programàtica
    navigateToAbout() {
      // Utilitzem router.push per navegar a la ruta /about
      this.$router.push('/about');
    },
  },
};
</script>