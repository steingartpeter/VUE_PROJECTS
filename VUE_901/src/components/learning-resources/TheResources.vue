<template>
  <div>
    <base-card>
      <base-button
        @click="setSelctedTab('stored-resources')"
        :mode="storedResourceMode"
        >Stored resources</base-button
      >
      <base-button
        @click="setSelctedTab('add-resource')"
        :mode="addResourceMode"
        >Add new resources</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from './storedResources.vue';
import AddResources from './AddResourcs.vue';
export default {
  components: {
    StoredResources,
    AddResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  },
  computed: {
    storedResourceMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  methods: {
    setSelctedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style></style>
