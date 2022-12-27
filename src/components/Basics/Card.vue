<template>
  <v-row no-gutters>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-card class="pa-4 backColor">
        <v-card-title class="pa-0 mb-5">
          <v-icon class="mr-1 textColor" size="22">{{ cardIcon }}</v-icon>
          <h3 class="textColor">{{ cardTitel }}</h3>
        </v-card-title>
        <v-card-text class="py-0" style="color: #ffffff">
          <slot name="contentOfCard"></slot>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    cardTitel: String,
    cardIcon: String,
  },
};
</script>

<style scoped>
.backColor {
  background-color: #464646;
}

.textColor {
  color: #ffffff;
}
</style>
