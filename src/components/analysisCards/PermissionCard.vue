<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <div slot="contentOfCard">
      <ExpansionPanelPermission
        :items="usesPermission"
        headerName="Uses Permission"
        class="mb-2"
      ></ExpansionPanelPermission>

      <ExpansionPanelPermission
        :items="customPermission"
        headerName="Custom Permission"
        class="mb-2"
      ></ExpansionPanelPermission>

      <ExpansionPanelPermission
        :items="APIpermission"
        headerName="API Permission"
        class="mb-2"
      ></ExpansionPanelPermission>
    </div>
  </Card>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Basics/Card.vue";
import ExpansionPanelPermission from "@/components/Basics/expansionPanel/ExpansionPanelPermission.vue";
export default {
  name: "PermissionCard",
  data() {
    return {
      cardTitel: "Permissions",
      cardIcon: "mdi-shield-key-outline",
    };
  },
  components: {
    Card,
    ExpansionPanelPermission,
  },
  computed: {
    ...mapState(["usesPermission"]),
    ...mapState(["customPermission"]),
    ...mapState(["APIpermission"]),
  },
};
</script>
