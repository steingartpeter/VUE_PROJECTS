<template>
  <div>
    <the-header title="Remeber Me"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
  </div>
</template>

<script>
import StoredResources from './components/learning-resources/storedResources';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    StoredResources,
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
