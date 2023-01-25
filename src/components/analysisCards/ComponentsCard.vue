<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <div slot="contentOfCard">
      <ExpansionPanelTreeLevels
        :items="activityComponent"
        headerName="Activities"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="activityAliasComponent"
        headerName="Activity Alias"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="servicesComponent"
        headerName="Services"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="broadcastReceiversComponent"
        headerName="Broadcast Receivers"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelComponent
        :items="contentProvidersComponent"
        headerName="Content Providers"
      ></ExpansionPanelComponent>
    </div>
  </Card>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Basics/Card.vue";
import ExpansionPanelTreeLevels from "@/components/Basics/expansionPanel/ExpansionPanelTreeLevels.vue";
import ExpansionPanelComponent from "@/components/Basics/expansionPanel/ExpansionPanelComponent.vue";
export default {
  name: "ComponentsCard",
  data() {
    return {
      cardTitel: "Components",
      cardIcon: "mdi-puzzle-outline",
    };
  },
  components: {
    Card,
    ExpansionPanelTreeLevels,
    ExpansionPanelComponent,
  },
  computed: {
    ...mapState(["activityComponent"]),
    ...mapState(["activityAliasComponent"]),
    ...mapState(["broadcastReceiversComponent"]),
    ...mapState(["servicesComponent"]),
    ...mapState(["contentProvidersComponent"]),
  },
};
</script>
