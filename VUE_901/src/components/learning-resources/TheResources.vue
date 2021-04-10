<template>
  <div>
    <base-card>
      <base-button
        @click="setSelctedTab('stored-resources')"
        :mode="storedResourceMode"
        >Stored resources</base-button
      >
      <base-button
        @click="setSelctedTab('add-resources')"
        :mode="addResourceMode"
        >Add new resources</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './storedResources.vue';
import AddResources from './AddResources.vue';
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
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },
  methods: {
    setSelctedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(ttl, descr, lnk) {
      const newResource = {
        id: new Date().toISOString(),
        title: ttl,
        description: descr,
        link: lnk
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(rsid) {
      this.storedResources.splice(
        this.storedResources.findIndex(res => res.id === rsid),
        1
      );
      //this.storedResources = this.storedResources.filter(res => res.id != rsid);
      console.log(this.storedResources);
    }
  }
};
</script>

<style></style>
