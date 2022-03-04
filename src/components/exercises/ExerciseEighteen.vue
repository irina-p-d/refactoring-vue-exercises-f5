<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise 18</h1>

    <p class="subheading font-weight-regular">Report card</p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>Enter your qualification</v-toolbar-title>
      <!-- <v-form ref="form" class="d-inline-flex">
        <v-text-field
          v-model="num"
          label="Num"
          counter
          required
          id="num-input"
        ></v-text-field>

        <v-btn class="grey darken-1" v-on:click="reportCard()"> submit </v-btn>
      </v-form> -->
    </v-toolbar>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nameStudent"
        :counter="10"
        :rules="nameStudentRules"
        label="NameStudent"
      ></v-text-field>

      <v-text-field
        v-model="subject"
        :counter="20"
        :rules="subjectRules"
        label="Subject"
      ></v-text-field>

      <v-text-field
        v-model="cualification"
        :counter="3"
        :rules="cualificationRules"
        label="Cualification"
      ></v-text-field>

      <v-btn class="grey darken-1" v-on:click="reportCard()"> submit </v-btn>
    </v-form>

    <div id="result-container">
      <p>{{ nameStudent }}</p>
      <p></p>
      <p>{{ subject }}:{{ result }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  el: "#result-container",

  data: () => ({
    valid: true,
    name: "",
  }),
  name: "Exercises",

  props: {
    cualification: {},
    result: {},
    nameStudent: {},
    subject: {},
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    reportCard() {
      if (this.cualification > 10 || this.cualification < 0) {
        alert("This qualification is not valid");
      } else {
        if (this.cualification > 0 && this.cualification < 3) {
          this.result = "Too poor";
        }

        if (this.cualification >= 3 && this.cualification < 5) {
          this.result = "Below average";
        }

        if (this.cualification >= 5 && this.cualification < 6) {
          this.result = "Fair";
        }

        if (this.cualification >= 6 && this.cualification < 7) {
          this.result = "Good";
        }

        if (this.cualification >= 7 && this.cualification < 9) {
          this.result = "Merit";
        }
        if (this.cualification >= 9 && this.cualification <= 10) {
          this.result = "Distinction";
        }
      }
      this.cualification = "";
    },
  },
};
</script>
