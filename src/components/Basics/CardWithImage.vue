<template>
  <v-main class="background">
    <v-container fill-height>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="10" sm="10" md="10">
          <v-card class="elevation-8 rounded-2 mx-auto">
            <v-row no-gutters>
              <v-col cols="12" sm="12" md="6" class="px-14 pt-4 pb-3 my-auto">
                <slot name="rightPart"></slot>
              </v-col>

              <v-col md="6" v-if="$vuetify.breakpoint.mdAndUp">
                <v-carousel
                  hide-delimiters
                  height="100%"
                  v-if="$vuetify.breakpoint.mdAndUp"
                >
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CardWithImage",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/1.jpg"),
        },
        {
          src: require("@/assets/images/2.jpg"),
        },
        {
          src: require("@/assets/images/3.jpg"),
        },
      ],
    };
  },
};
</script>
