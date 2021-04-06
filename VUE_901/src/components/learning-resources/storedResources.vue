<template>
  <ul>
    <learning-resource
      v-for="(lrsc, index) in resources"
      :key="lrsc.id"
      :title="lrsc.title"
      :description="lrsc.description"
      :link="lrsc.link"
      :idx="index"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';
export default {
  inject: ['resources'],
  components: {
    LearningResource
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
