<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the JavasScript exercises in Vue
        </h1>
      </v-col>
      <div class="d-flex justify-center logos-container">
        <v-img
          alt="JavaScript"
          contain
          src="../assets/js.png"
          transition="scale-transition"
          width="10rem"
          class="ma-8"
        />

        <v-img
          alt="Vue"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="10rem"
          class="ma-8"
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExercisesWelcome",
};
</script>
