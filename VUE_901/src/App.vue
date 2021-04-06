<template>
  <div>
    <the-header title="Remeber Me"></the-header>
    <the-resurces></the-resurces>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResurces from './components/learning-resources/TheResources.vue';
export default {
  components: {
    TheHeader,
    TheResurces
  }
};
</script>

<style>
/* ul {
  background-color: burlywood;
} */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
</style>
