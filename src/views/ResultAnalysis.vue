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
          :file="file"
          :app="app"
        ></InformationCard>

        <ComponentsCard id="components" class="mt-5"></ComponentsCard>

        <!-- <v-expansion-panels class="mb-6" multiple>
          <v-expansion-panel >
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pa-4">
              <v-expansion-panels class="mb-6" multiple>
                <v-expansion-panel v-for="(item, i) in 5" :key="i">
                  <v-expansion-panel-header expand-icon="mdi-menu-down">
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pa-4"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</v-expansion-panel-content
                  >
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels> -->

        <!-- <v-expansion-panels class="mb-6" multiple>
          <v-expansion-panel >
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pa-4">
              <v-expansion-panels class="mb-6" multiple>
                <v-expansion-panel v-for="(item, i) in 5" :key="i">
                  <v-expansion-panel-header expand-icon="mdi-menu-down">
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pa-4"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</v-expansion-panel-content
                  >
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels> -->

        <!-- <h1 id="a">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="b">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="c">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="d">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="cc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="dd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="ccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="ddd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="cccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="dddd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaaaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbbbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="ccccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="ddddd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaaaaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbbbbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="cccccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="dddddd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaaaaaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbbbbbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="ccccccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="ddddddd">ddddddddddddddddddddddddddddddddddddddd</h1>
        <h1 id="aaaaaaaa">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h1 id="bbbbbbbb">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
        <h1 id="cccccccc">ccccccccccccccccccccccccccccccccccccccc</h1>
        <h1 id="dddddddd">ddddddddddddddddddddddddddddddddddddddd</h1> -->
      </div>
    </v-main>
  </div>
</template>

<script>
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

      file: {
        name: "name",
        size: "size KB",
        MD5: "MD5",
        sha: "sha-256",
      },
      app: {
        name: "name",
        packageName: "packageName",
        label: "label",
        icon: "icon",
        minSdkVersion: "minSdkVersion",
        targetSdkVersion: "targetSdkVersion",
        maxSdkVersion: "maxSdkVersion",
        androidVersionCode: "androidVersionCode",
        androidVersionName: "androidVersionName",
      },
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
  // mounted(){
  //   // console.log(this.$refs.aaa)
  //   this.$vuetify.goTo(this.$refs.aaaaaa)
  // },
  components: {
    Header,
    NavigationDrawer,
    ExpansionPanel,
    InformationCard,
    ComponentsCard,
  },
};
</script>
