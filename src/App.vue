<template>
  <v-app>
    <top-bar />

    <v-main>
      <router-view />
    </v-main>

    <bottom-bar />
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  components: { TopBar, BottomBar },
  name: "App",
};
</script>

<style lang="scss">
.application,
.v-application {
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }

  header a {
    color: #ffffff;
    margin: 0.4rem;
    padding: 0.5rem;
    text-decoration: none;

    // &:hover {
    //   background-color: rgba(255, 255, 255, 0.4);
    // }
  }

  .nav-menu-container {
    & > * {
      margin: 0.6rem;
    }

    i {
      margin: 0.8rem 0.8rem 0.8rem 0;
    }
  }

  .v-main {
    text-align: center;
    margin: 4rem auto;

    .logos-container {
      width: 100%;

      .v-responsive {
        flex: none;
      }
    }

    .form-container {
      height: 6rem !important;
      margin-top: 4rem;
      padding: 1rem;
      display: flex;
      align-items: center;

      & > * {
        gap: 1rem;
      }

      form.v-form {
        margin-top: 1.2rem;

        & > * {
          margin: 0.8rem;
        }
      }
    }

    #result-container {
      margin-top: 2rem;
    }
  }
}
</style>
