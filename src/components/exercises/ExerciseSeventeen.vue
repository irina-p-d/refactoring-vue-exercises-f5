<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise 17</h1>

    <p class="subheading font-weight-regular">
      Check if user is old enough to drive
    </p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>How old are you?</v-toolbar-title>
      <v-form ref="form" class="d-inline-flex">
        <v-text-field
          v-model="age"
          label="Age"
          counter
          maxlength="3"
          required
          id="age-input"
        ></v-text-field>

        <v-btn class="grey darken-1" v-on:click="isAdult()"> submit </v-btn>
      </v-form>
    </v-toolbar>

    <div id="result-container">
      <h2 id="result">{{ result }}</h2>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Exercises",

  props: {
    age: {},
    result: {},
  },

  methods: {
    isAdult() {
      if (!this.age) {
        this.result = "You should enter a num";
      } else {
        this.result = this.age < 18 ? "You cannot drive" : "You can drive";
      }
      this.age = "";
    },
  },
};
</script>
