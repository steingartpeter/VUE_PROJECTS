<template>
  <div class="container">
    <div class="usr-div">
      <h2>Name:{{ usrName }}</h2>
      <h3>Age: {{ usrAge }} years</h3>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      usrName: {
        type: String,
        required: true,
      },
      usrAge: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>

<style>
  div.container {
    margin: 2rem 0;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
  }
  .usr-div {
    padding: 1rem;
    font-family: "Courier New", Courier, monospace;
    font-size: 25px;
    font-weight: bold;
    background-color: #dedede;
    border: 1px solid #545454;
    border-radius: 15px;
    box-shadow: inset 5px 5px 10px #a5a5a5;
  }
</style>
