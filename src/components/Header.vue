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

      <a href="#" title="VAndroid" v-if="!$vuetify.breakpoint.xsOnly">
        <img
          src="@/assets/images/vandroid.png"
          width="100vw"
          height="18.5vh"
          class="my-5 mx-auto"
        />
      </a>

      <v-divider
        v-if="$vuetify.breakpoint.smAndUp"
        vertical
        class="mx-3"
      ></v-divider>

      <!-- <div class="my-0" style="width: 14rem; fontSize: .8rem" v-if="$vuetify.breakpoint.smAndUp">
        VAndroid is a strong tool for analyze the security of mobile applications!
      </div> -->

      <router-link to="#" style="color: black">
        <div class="my-0" style="width: 14rem; fontSize: .8rem" v-if="$vuetify.breakpoint.smAndUp">
          VAndroid is a strong tool for analyze the security of mobile applications!
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
          style="color: black; font-size: 0.9rem"
          class="mr-3 text-uppercase"
          v-if="!isShowSearchBox"
          >About Us</router-link
        >

        <router-link
          to="#"
          style="color: black; font-size: 0.9rem"
          class="mr-3 text-uppercase"
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
        color="green"
        v-if="isShowSearchBox"
      >
        <template class="pa-0 ma-0" v-slot:prepend-inner>
          <v-icon size="21">mdi-magnify</v-icon>
        </template>
      </v-text-field>

      <Button plain icon class="search-icon" @click="openSearchBox">
        <v-icon size="21" slot="buttonSlotBefor">mdi-magnify</v-icon>
      </Button>

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
  padding: 8.5px 7.5px;
}

.v-btn--icon.v-size--default:hover {
  color: green;
}
</style>
