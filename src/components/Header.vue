<template>
  <v-card>
    <v-app-bar
      app
      elevate-on-scroll
      fixed
      :color="color"
      class="px-5 rounded-0"
      height="65vh"
    >
      <v-app-bar-nav-icon
        @click.stop="onClick"
        v-if="!$vuetify.breakpoint.lgAndUp && appBarNavIcon"
        class="mr-3"
      ></v-app-bar-nav-icon>

      <!-- <div class="my-0" style="width: 14rem; fontSize: .8rem" v-if="$vuetify.breakpoint.smAndUp">
        Android Intra-App Security Analysis
      </div> -->

      <router-link to="#" style="color: black" v-if="!$vuetify.breakpoint.xsOnly">
        <div class="my-0" style="fontSize: 1.2rem; font-weight: bold">
          Application Security
        </div>
      </router-link>

      <v-divider
        v-if="$vuetify.breakpoint.smAndUp"
        vertical
        class="mx-3"
      ></v-divider>

      <router-link to="#" style="color: black" v-if="$vuetify.breakpoint.smAndUp">
        <div class="my-0" style="width: 14rem; fontSize: .9rem">
          Android Intra-App Security Analysis
        </div>
      </router-link>

      <div v-for="leftIcon in leftIcons" :key="leftIcon.id">
        <Button :to="leftIcon.link" plain icon>
          <v-icon size="21" slot="buttonSlotBefor">{{ leftIcon.name }}</v-icon>
        </Button>
      </div>

      <v-spacer></v-spacer>

      <div>
        <router-link
          to="#"
          style="color: black; font-size: 1rem"
          class="mr-3 text-uppercase header-text"
          v-if="!isShowSearchBox"
          >About Us</router-link
        >

        <router-link
          to="#"
          style="color: black; font-size: 1rem"
          class="mr-3 text-uppercase header-text"
          v-if="!isShowSearchBox"
          >Contact Us</router-link
        >
      </div>

      <v-text-field
        class="my-auto mr-2"
        placeholder="Search"
        filled
        dense
        hide-details
        color="#60740a"
        v-if="isShowSearchBox"
      >
        <template class="pa-0 ma-0" v-slot:prepend-inner>
          <v-icon size="21">mdi-magnify</v-icon>
        </template>
      </v-text-field>

      <Button plain icon class="search-icon" @click="openSearchBox">
        <v-icon size="21" slot="buttonSlotBefor">mdi-magnify</v-icon>
      </Button>

      <v-menu offset-y transition="fade-transition">
        <template v-slot:activator="{ attrs, on }">
          <v-btn plain icon v-bind="attrs" v-on="on">
            <v-icon size="21">mdi-earth</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0" v-for="language in languages" :key="language.text">
          <v-list-item
            class="pa-0 ma-0 pr-4 pl-3"
            @click="changeLanguage(language.text)"
          >
            <v-list-item-icon class="ma-0 mr-1 my-auto"
              ><v-icon small color="black">
                {{ language.icon }}
              </v-icon></v-list-item-icon
            >
            <v-list-item-title
              style="font-size: 0.8rem; color: black"
              v-text="language.text"
            ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-for="rightIcon in rightIcons" :key="rightIcon.id">
        <Button :to="rightIcon.link" plain icon>
          <v-icon size="21" slot="buttonSlotBefor">{{ rightIcon.name }}</v-icon>
        </Button>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script>
import Button from "@/components/Basics/Button.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
export default {
  name: "Header",
  components: {
    Button,
    NavigationDrawer,
  },
  data() {
    return {
      isShowSearchBox: false,
      languages: [
        { text: "English", icon: "mdi-flag-variant-outline", link: "#" },
        { text: "??????????", icon: "mdi-flag-variant-outline", link: "#" },
      ],
    };
  },
  props: {
    appBarNavIcon: Boolean,
    rightIcons: Array,
    leftIcons: Array,
    profileItems: Array,
    color: String,
  },
  methods: {
    openSearchBox() {
      this.isShowSearchBox = !this.isShowSearchBox;
    },
    changeLanguage(language) {
      if (language == "English") {
        console.log("english");
      } else {
        console.log("farsi");
      }
    },
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.v-toolbar__content .v-btn.v-btn--icon.v-size--default,
.v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
  width: 40px;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 8.5px 0px;
}

.v-btn--icon.v-size--default:hover {
  color: #60740a;
}

.header-text:hover {
  color: black !important;
  text-decoration: underline;
  text-decoration-color: #60740a;
  text-underline-offset: .5rem;
  text-decoration-thickness: .1rem;
}
</style>
