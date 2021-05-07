<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'excelent' }">
      <button type="button" @click="activate('excelent')">Excelent</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null
    };
  },
  methods: {
    activate(option) {
      this.activeOption = option;
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #a00075;
  border-radius: 12px;
}
.active button {
  color: #a00075;
  background-color: cornsilk;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid lightgray;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #dddede;
}
</style>
