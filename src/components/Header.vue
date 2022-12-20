<template>
  <v-card>
    <v-app-bar
      app
      elevate-on-scroll
      fixed
      color="#f2f4f4"
      class="px-5 rounded-0"
      height="65vh"
    >
      <v-app-bar-nav-icon
        @click.stop="onClick"
        v-if="!$vuetify.breakpoint.lgAndUp"
        class="mr-5"
      ></v-app-bar-nav-icon>

      <a href="#" title="VAndroid">
        <img
          src="@/assets/images/vandroid.png"
          width="100px"
          height="18.5px"
          class="my-5 mx-auto"
        />
      </a>

      <!-- <div class="my-0 ml-5" style="width: 14rem; fontsize: 0.8rem">
        VAndroid is a strong tool for analyze the security of mobile
        applications!
      </div> -->

      <div class="my-0 ml-5" style="width: 14rem; fontSize: .8rem" v-if="$vuetify.breakpoint.smAndUp">
        VAndroid is a strong tool for analyze the security of mobile applications!
      </div>

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

      <router-link to="#" style="color: black;">About Us</router-link>
      <router-link to="#" class="ml-3 mr-5" style="color: black;">Contact Us</router-link>

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
    rightIcons: Array,
    leftIcons: Array,
    profileItems: Array,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.backColor {
  background-color: #f2f4f4;
}

.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
  opacity: 1;
  color: #000000;
}

.v-btn--icon.v-size--default:hover {
  color: #5a8dee;
}

.v-toolbar__content .v-btn.v-btn--icon.v-size--default,
.v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
  width: 40px;
}

.profile-name {
  letter-spacing: 0;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 8.5px 7.5px;
}

v-badge {
  padding: 0;
}

.outer-link-exact-active {
  color: #5a8dee;
}
</style>
