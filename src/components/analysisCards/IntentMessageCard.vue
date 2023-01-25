<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <div slot="contentOfCard">
      <ExpansionPanelIntentMessage
        :items="intentMessage"
        headerName="Intent Messages"
        class="mb-2"
      ></ExpansionPanelIntentMessage>
    </div>
  </Card>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Basics/Card.vue";
import ExpansionPanelIntentMessage from "@/components/Basics/expansionPanel/ExpansionPanelIntentMessage.vue";
export default {
  name: "IntentMessageCard",
  data() {
    return {
      cardTitel: "Intent Messages",
      cardIcon: "mdi-message-text-outline",
    };
  },
  components: {
    Card,
    ExpansionPanelIntentMessage,
  },
  computed: {
    ...mapState(["intentMessage"]),
  },
};
</script>
