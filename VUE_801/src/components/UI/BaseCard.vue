<!--
 In this component we introduce a SLOT
 In this case in two diferent component we ave a same HTML element: div
 Both contain some child elements(dyn.with Vue), and has the same CSS format.
 In this case we use a special HTML tag:slot, which means, that we will
 use our wrapper tag to wrap the cintent added inside it somewhere else... 
!-->
<template>
  <div>
    <!-- 
      If we do not provide any content to a slot, worth to check
      If there is no conten, no display => v-if
     -->
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$slots);
    },
  };
</script>

<style scoped>
  div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
  div header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
