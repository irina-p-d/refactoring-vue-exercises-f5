<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1 class="display-2 font-weight-bold mb-3">Exercise 19</h1>

    <p class="subheading font-weight-regular">DNI letter calculator</p>

    <v-toolbar dark class="d-flex justify-space-around form-container">
      <v-toolbar-title>Enter your num</v-toolbar-title>
      <v-form ref="form" class="d-inline-flex">
        <v-text-field
          v-model="num"
          label="Num"
          counter
          maxlength="8"
          minlength="8"
          required
          id="num-input"
        ></v-text-field>

        <v-btn class="grey darken-1" v-on:click="calculate()"> submit </v-btn>
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
    num: {},
    result: {},
  },

  methods: {
    calculate() {
      let letters = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
      ];
      let num = this.num;
      let remainder = num % 23;

      if (isNaN(this.num)) {
        this.result = "Is not valid, should be a num between 0 - 999999999";
      }

      if (this.num >= 0 && this.num <= 99999999) {
        this.result = `The letter of your id is: ${letters[remainder]}`;
      }

      this.num = "";
    },
  },
};
</script>
