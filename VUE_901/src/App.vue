<template>
  <div>
    <the-header title="Remeber Me"></the-header>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Officila Vue-js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'GOOGLE',
          description: 'Learn to google...',
          link: 'https://www.google.com'
        }
      ]
    };
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
