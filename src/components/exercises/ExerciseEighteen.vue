<template>
  <div id="result" class="container">
    <v-container>
      <v-spacer></v-spacer>

      <h1 class="display-2 font-weight-bold mb-3">Exercise 18</h1>

      <p class="subheading font-weight-regular">Report card</p>

      <v-toolbar dark class="d-flex justify-space-around form-container">
        <v-toolbar-title>Enter your qualification</v-toolbar-title>
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

      <div class="result-container">
        <p>{{ nameStudent }}</p>

        <p>{{ subject }}:{{ result }}</p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    result: "",
    cualification: "",
    nameStudent: "",
    subject: "",
  }),

  name: "Exercises",

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
      let cualification = this.cualification;

      if (cualification > 10 || cualification < 0) {
        alert("This qualification is not valid");
      } else {
        if (cualification > 0 && cualification < 3) {
          this.result = "Too poor";
        }

        if (cualification >= 3 && cualification < 5) {
          this.result = "Below average";
        }

        if (cualification >= 5 && cualification < 6) {
          this.result = "Fair";
        }

        if (cualification >= 6 && cualification < 7) {
          this.result = "Good";
        }

        if (cualification >= 7 && cualification < 9) {
          this.result = "Merit";
        }
        if (cualification >= 9 && cualification <= 10) {
          this.result = "Distinction";
        }
      }

      cualification = "";
    },
  },
};
</script>
