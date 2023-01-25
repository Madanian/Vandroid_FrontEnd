<template>
  <v-app app>
    <router-view er-view class="app" />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>

<style>
@import "@/font.css";
.app {
  font-family: "calibril";
  font-weight: 400;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #60740a !important;
}
</style>
