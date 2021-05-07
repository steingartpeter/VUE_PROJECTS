<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: nameValidity === 'invalid' }">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateName"
      />
      <p v-if="nameValidity == 'invalid'">Please eneter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="News"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="Tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="Nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          v-model="how"
          value="VideoCourse"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          v-model="how"
          value="Blogs"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          v-model="how"
          value="Other"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input
        type="checkbox"
        name="confirm-terms"
        id="confirm-terms"
        v-model="confirm"
      />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div class="form-control">
      <rating-control></rating-control>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl';
export default {
  components: { RatingControl },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'google',
      // For checkboxes - as they are in group - we need an empty array
      // And we need to add values ti the HTML template as well ...
      interest: [],
      how: null,
      confirm: false,
      nameValidity: 'pending'
    };
  },
  methods: {
    submitForm() {
      console.log('Usernam: ' + this.userName);
      this.userName = '';
      console.log('User age: ' + this.userAge);
      console.log(31);
      this.userAge = null;
      // In case of select fields, we have to manually handle the prefered option, as the
      // empty value is problematic...
      console.log('Referrer: ' + this.referrer);
      this.referrer = 'google';
      console.log('Checkboxes:');
      console.log(this.interest);
      console.log('Radio buttons:');
      console.log(this.how);
      //reset checkboxes + radio
      this.interest = [];
      this.how = null;
    },
    validateName() {
      if (this.userName == '') {
        this.nameValidity = 'invalid';
      } else {
        this.nameValidity = 'valid';
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid {
  margin: 0.5rem 0;
  background-color: #fffefe;
}
.form-control.invalid input {
  border-color: crimson;
  box-shadow: 3px 3px 6px #aa4545;
}
.form-control.invalid label {
  color: crimson;
}
label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
