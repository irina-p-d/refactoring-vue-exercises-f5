<template>
  <v-app-bar app color="white--text font-weight-light" dark>
    <div class="d-flex align-center justify-space-between col-12">
      <div>
        <a href="/" class="header-info">
          <h1 id="logo-name">JS inside Vue</h1>
          <v-spacer></v-spacer>
        </a>
      </div>
      <nav-menu />
    </div>
  </v-app-bar>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "TopBar",

  components: { NavMenu },
};
</script>
