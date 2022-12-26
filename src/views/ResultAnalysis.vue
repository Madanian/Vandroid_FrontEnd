<template>
  <div>
    <NavigationDrawer v-if="isShowNav" :color="headerAndNavigationColor"></NavigationDrawer>
    <Header appBarNavIcon @click="showNav" :rightIcons="rightIcons" :color="headerAndNavigationColor"></Header>
    <v-main>
      <div class="mx-8 mt-8 mb-5">
        <ExpansionPanel></ExpansionPanel>
      </div>
    </v-main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import ExpansionPanel from "@/components/Basics/ExpansionPanel.vue"
export default {
  name: "ResultAnalysis",
  data() {
    return {
      isShowNav: null,
      rightIcons: [
        { id: 1, name: "mdi-earth", link: "#" },
      ],
      headerAndNavigationColor: "#f2f4f4",
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
  components: {
    Header,
    NavigationDrawer,
    ExpansionPanel,
  },
};
</script>
