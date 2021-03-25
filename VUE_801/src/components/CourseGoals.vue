<template>
  <ul>
    <li v-for="gl in goals" :key="gl">
      <slot :goal="gl" nextPropFromSlot="ez egy szükségtelen Prop"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        goals: ["finish the course", "learn Vue"],
      };
    },
  };
</script>

<style lang="css" scoped></style>
