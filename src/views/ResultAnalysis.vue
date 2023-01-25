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

        <ComponentsCard id="components" class="mt-5"></ComponentsCard>

        <DynamicRegisteredComponentsCard
          id="dynamicRegisteredComponentsCard"
          class="mt-5"
        ></DynamicRegisteredComponentsCard>
      </div>
    </v-main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import ExpansionPanel from "@/components/Basics/ExpansionPanelTreeLevels.vue";
import InformationCard from "@/components/InformationCard.vue";
import ComponentsCard from "@/components/ComponentsCard.vue";
import DynamicRegisteredComponentsCard from "@/components/DynamicRegisteredComponentsCard.vue";
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
  },
  beforeMount() {
    this.$store.dispatch("showGeneralInformation");
    this.$store.dispatch("showActivityComponent");
    this.$store.dispatch("showActivityAliasComponent");
    this.$store.dispatch("showBroadcastReceiversComponent");
    this.$store.dispatch("showServicesComponent");
    this.$store.dispatch("showContentProvidersComponent");
    this.$store.dispatch("showDynamicRegisteredComponent");
  },
  mounted() {
    // console.log(this.generalInformation);
  },
};
</script>
