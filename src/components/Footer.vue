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
            v-text="item.text"
          ></router-link>
        </v-col>

        <!-- <v-spacer v-if="$vuetify.breakpoint.smAndDown"/>

        <v-col cols="12" md="auto">
          <div class="text-body-1 font-weight-light pt-6 pt-md-0 text-center">
            &copy; {{ new Date().getFullYear() }}, Made by
            <v-icon>mdi-vuetify</v-icon>
            <a
              href="https://vuetifyjs.com/en/about/meet-the-team/#company"
              class="text-decoration-none"
              >Vuetify</a
            >
          </div>
        </v-col> -->
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
