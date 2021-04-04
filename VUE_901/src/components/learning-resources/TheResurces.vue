<template>
  <div>
    <base-card>
      <base-button @click="setSelctedTab('stored-resources')"
        >Stored resources</base-button
      >
      <base-button @click="setSelctedTab('add-resource')"
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
      selectedTab: 'stored-resources'
    };
  },
  methods: {
    setSelctedTab(tab) {
      this.setSelctedTab = tab;
    }
  }
};
</script>

<style></style>
