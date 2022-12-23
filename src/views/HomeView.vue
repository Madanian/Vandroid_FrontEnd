<template>
  <div>
    <NavigationDrawer v-if="isShowNav" :color="color"></NavigationDrawer>
    <Header appBarNavIcon @click="showNav" :leftIcons="leftIcons" :color="color"></Header>
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
  name: "Home",
  data() {
    return {
      isShowNav: null,
      leftIcons: [
        { id: 1, name: "mdi-magnify", link: "#" },
        { id: 2, name: "mdi-earth", link: "#" },
      ],
      color: "#f2f4f4",
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
