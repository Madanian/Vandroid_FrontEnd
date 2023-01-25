<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <div slot="contentOfCard">
      <ExpansionPanelTreeLevels
        :items="dynamicRegisteredComponent"
        headerName="Broadcast Receiver"
        class="mb-2"
      ></ExpansionPanelTreeLevels>
    </div>
  </Card>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Basics/Card.vue";
import ExpansionPanelTreeLevels from "@/components/Basics/ExpansionPanelTreeLevels.vue";
import ExpansionPanel from "@/components/Basics/ExpansionPanelComponent.vue";
export default {
  name: "DynamicRegisteredComponentsCard",
  data() {
    return {
      cardTitel: "Dynamic Registered Components",
      cardIcon: "mdi-animation-outline",
    };
  },
  components: {
    Card,
    ExpansionPanelTreeLevels,
    ExpansionPanel,
  },
  computed: {
    ...mapState(["dynamicRegisteredComponent"]),
  },
  mounted() {
    console.log(this.dynamicRegisteredComponent);
  },
};
</script>
