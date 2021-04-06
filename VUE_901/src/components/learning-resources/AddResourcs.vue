<template>
  <base-card>
    <form @submit="addNewResource">
      <div class="form-control">
        <label for="title">Tiltle</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="description">Tiltle</label>
        <textarea id="description" name="description" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Tiltle</label>
        <input type="url" name="link" id="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {};
</script>

<style scoped>
input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;
}
</style>
