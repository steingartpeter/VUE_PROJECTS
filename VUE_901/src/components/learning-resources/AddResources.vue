<template>
  <div>
    <base-dialog
      v-if="inputIsInvalid"
      title="Missing required data!"
      @close="confirmError"
    >
      <template v-slot:default>
        <p>
          Unfortunately, it seems, at least one of the input values is
          missing!<br />Please fill all fields!
        </p>
      </template>
      <template v-slot:actions>
        <base-button @click="confirmError">OK</base-button>
        <base-button @click="resetForm">Reset</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Tiltle</label>
          <input type="text" name="title" id="title" ref="inp_title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            ref="inp_descr"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">URL:</label>
          <input type="url" name="link" id="link" ref="inp_link" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
  data() {
    return {
      inputIsInvalid: false
    };
  },
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.inp_title.value;
      const enteredDescr = this.$refs.inp_descr.value;
      const enteredLink = this.$refs.inp_link.value;
      if (
        enteredTitle.trim() === '' ||
        enteredDescr.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescr, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
    resetForm() {
      this.$refs.inp_title.value = '';
      this.$refs.inp_descr.value = '';
      this.$refs.inp_link.value = '';
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
button {
  margin-left: 1rem;
}
</style>
