<template>
  <div class="nav-menu-container">
    <v-menu bottom :offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <a href="/">
          <v-btn dark v-bind="attrs" v-on="on"
            ><v-icon>mdi-home</v-icon>Home
          </v-btn>
        </a>
      </template>
    </v-menu>
    <v-menu bottom :offset-y="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on"
          ><v-icon>mdi-school</v-icon> Exercises
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.href"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Exercise 17", href: "/exercise17" },
      { title: "Exercise 18", href: "/exercise18" },
      { title: "Exercise 19", href: "/exercise19" },
    ],
    offset: true,
  }),
};
</script>
