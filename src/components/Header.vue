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

      <a href="#" title="VAndroid">
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

      <template v-for="rightIcon in rightIcons">
        <Button
          :key="rightIcon.id"
          :to="rightIcon.link"
          plain
          icon
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-icon size="21" slot="buttonSlotBefor">{{ rightIcon.name }}</v-icon>
        </Button>
      </template>

      <v-spacer></v-spacer>

      <div>
        <router-link to="#" style="color: black; font-size: 0.8rem" class="mr-3"
          >About Us</router-link
        >
        <router-link to="#" class="mr-3" style="color: black; font-size: 0.8rem"
          >Contact Us</router-link
        >
      </div>

      <template v-for="leftIcon in leftIcons">
        <Button
          :key="leftIcon.id"
          :to="leftIcon.link"
          plain
          icon
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-icon size="21" slot="buttonSlotBefor">{{ leftIcon.name }}</v-icon>
        </Button>
      </template>
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
    return {};
  },
  props: {
    appBarNavIcon: Boolean,
    rightIcons: Array,
    leftIcons: Array,
    profileItems: Array,
    color: String,
  },
  methods: {
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
</style>
