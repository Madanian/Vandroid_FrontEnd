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

        <ComponentsCard
          id="components"
          class="mt-5"
        ></ComponentsCard>
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
    ...mapState(["activityComponent"]),
    ...mapState(["activityAliasComponent"]),
    ...mapState(["broadcastReceiversComponent"]),
    ...mapState(["servicesComponent"]),
    ...mapState(["contentProvidersComponent"]),
  },
  components: {
    Header,
    NavigationDrawer,
    ExpansionPanel,
    InformationCard,
    ComponentsCard,
  },
  beforeMount(){
    this.$store.dispatch("showGeneralInformation");
    this.$store.dispatch("showActivityComponent");
    this.$store.dispatch("showActivityAliasComponent");
    this.$store.dispatch("showBroadcastReceiversComponent");
    this.$store.dispatch("showServicesComponent");
    this.$store.dispatch("showContentProvidersComponent");
  },
  mounted() {
    // console.log(this.generalInformation);
  },
};
</script>
