<template>
  <v-footer color="transparent" absolute app inset fixed>
    <v-container>
      <v-row align="center">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          class="text-center"
          cols="4"
          md="auto"
        >
          <router-link
            :to="item.link"
            class="text-uppercase text-caption"
            rel="noopener"
            style="color: black"
            v-text="item.text"
          ></router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    items: [
      {
        link: "#",
        text: "About Us",
      },
      {
        link: "#",
        text: "Blog",
      },
      {
        link: "#",
        text: "Licenses",
      },
    ],
  }),
};
</script>
