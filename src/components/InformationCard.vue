<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <v-row slot="contentOfCard">
      <v-col cols="6" sm="6" md="6" lg="6">
        <div style="font-size: 1rem">informaion test explaintion 1</div>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6">
        <div style="font-size: 1rem">informaion test explaintion 2-1</div>
        <div style="font-size: 1rem">informaion test explaintion 2-2</div>
      </v-col>
    </v-row>
  </Card>
</template>

<script>
import Card from "@/components/Basics/Card.vue";
export default {
  name: "InformationCard",
  data() {
    return {
      cardTitel: "Information",
      cardIcon: "mdi-information-outline",
    };
  },
  components: {
    Card,
  },
};
</script>
