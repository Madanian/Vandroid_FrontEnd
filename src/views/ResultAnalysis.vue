<template>
  <div>
    <NavigationDrawer
      v-if="isShowNav"
      :color="headerAndNavigationColor"
    ></NavigationDrawer>
    <Header
      appBarNavIcon
      @click="showNav"
      :color="headerAndNavigationColor"
    ></Header>
    <v-main>
      <div class="mx-8 mt-8 mb-5">
        <InformationCard
          id="information"
          :information="generalInformation"
        ></InformationCard>

        <PermissionCard id="permissions" class="mt-5"></PermissionCard>

        <ComponentsCard id="components" class="mt-5"></ComponentsCard>

        <DynamicRegisteredComponentsCard
          id="dynamicRegisteredComponents"
          class="mt-5"
        ></DynamicRegisteredComponentsCard>

        <IntentMessageCard id="intentMessage" class="mt-5"></IntentMessageCard>
      </div>
    </v-main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import ExpansionPanel from "@/components/Basics/expansionPanel/ExpansionPanelTreeLevels.vue";
import InformationCard from "@/components/analysisCards/InformationCard.vue";
import ComponentsCard from "@/components/analysisCards/ComponentsCard.vue";
import DynamicRegisteredComponentsCard from "@/components/analysisCards/DynamicRegisteredComponentsCard.vue";
import PermissionCard from "@/components/analysisCards/PermissionCard.vue";
import IntentMessageCard from "@/components/analysisCards/IntentMessageCard.vue";
export default {
  name: "ResultAnalysis",
  data() {
    return {
      isShowNav: null,
      // rightIcons: [{ id: 1, name: "mdi-earth", link: "#" }],
      headerAndNavigationColor: "#c2e4ed",
    };
  },
  methods: {
    showNav() {
      this.isShowNav = !this.isShowNav;
    },
  },
  created() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.isShowNav = true;
    }
    if (!this.$vuetify.breakpoint.lgAndUp) {
      this.isShowNav = false;
    }
  },
  computed: {
    ...mapState(["generalInformation"]),
  },
  components: {
    Header,
    NavigationDrawer,
    ExpansionPanel,
    InformationCard,
    ComponentsCard,
    DynamicRegisteredComponentsCard,
    PermissionCard,
    IntentMessageCard,
  },
  beforeMount() {
    this.$store.dispatch("showData");
  },
};
</script>
