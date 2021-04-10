<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="removeResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
//<nn>
//  This should be registered az GLOBAL component, to have accesible enywhere
//</nn>
//import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseButton },
  //components: { BaseCard },
  inject: ['removeResource'],
  props: {
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  }
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
p {
  margin: 0.5rem 0;
}
a {
  text-decoration: none;
  color: #ce5c00;
}
a:hover,
a:active {
  color: #c89300;
}
</style>
