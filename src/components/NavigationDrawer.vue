<template>
  <v-navigation-drawer
    width=" 296px"
    v-model="show"
    app
    :color="color"
    @click="onClick"
    class="navigation"
  >
    <v-list>
      <v-list-item>
        <img
          src="@/assets/images/vandroid.png"
          width="200px"
          height="106.5px"
          class="my-5 mx-auto"
        />
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense class="mx-2">
      <v-list-item-group>
        <div v-for="category in categorys" :key="category.title" class="items">
          <v-list-item
            @click="scrollToComponent(category.scrollId)"
            v-if="!category.expansionPanel"
            class="px-1 item-height"
          >
            <v-list-item-icon class="mx-0 mr-1">
              <v-icon small>{{ category.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-size: 0.9rem; font-weight: bold">{{
                category.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-expansion-panels flat v-else focusable class="item-height">
            <v-expansion-panel>
              <v-expansion-panel-header
                style="height: 4vh"
                class="pa-0 px-1"
                :color="color"
              >
                <div>
                  <v-icon small class="ma-0 pa-0 mr-1">
                    {{ category.icon }}
                  </v-icon>
                  <span style="font-size: 0.9rem; font-weight: bold">{{
                    category.title
                  }}</span>
                </div>
                <template v-slot:actions>
                  <v-icon small> $expand </v-icon>
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content :color="color" class="pl-2">
                <div
                  v-for="item in category.items"
                  :key="item.title"
                  class="item-expansion-hover"
                >
                  <v-list-item @click="scrollToComponent(item.scrollId)">
                    <v-list-item-icon class="mx-0 mr-1">
                      <v-icon small class="hover-color">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        style="font-size: 0.8rem; font-weight: bold"
                        >{{ item.title }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-list-item-group>
    </v-list>

    <!-- header -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      categorys: [
        {
          expansionPanel: false,
          title: "Information",
          icon: "mdi-information-outline",
          scrollId: "#information",
        },
        {
          expansionPanel: true,
          title: "Permissions",
          icon: "mdi-shield-key-outline",
          items: [
            {
              title: "Uses Permissions",
              icon: "mdi-account-key-outline",
              scrollId: "#permissions",
            },
            {
              title: "Custom Permissions",
              icon: "mdi-cellphone-key",
              scrollId: "#permissions",
            },
            {
              title: "API Permissions",
              icon: "mdi-folder-key",
              scrollId: "#permissions",
            },
          ],
        },
        {
          expansionPanel: true,
          title: "Components",
          icon: "mdi-puzzle-outline",
          items: [
            {
              title: "Activities",
              icon: "mdi-radioactive",
              scrollId: "#components",
            },
            {
              title: "Activity Alias",
              icon: "mdi-rename-box",
              scrollId: "#components",
            },
            {
              title: "Services",
              icon: "mdi-playlist-check",
              scrollId: "#components",
            },
            {
              title: "Broadcast Receivers",
              icon: "mdi-arrow-expand-all",
              scrollId: "#components",
            },
            {
              title: "Content Providers",
              icon: "mdi-content-save-outline",
              scrollId: "#components",
            },
          ],
        },
        {
          expansionPanel: true,
          title: "Dynamic Registered Components",
          icon: "mdi-animation-outline",
          items: [
            {
              title: "Broadcast Receiver",
              icon: "mdi-account-key-outline",
              scrollId: "#dynamicRegisteredComponents",
            },
          ],
        },
        {
          expansionPanel: false,
          title: "Intent Messages",
          icon: "mdi-message-text-outline",
          scrollId: "#intentMessage",
        },
        // {
        //   expansionPanel: true,
        //   title: "Security Analysis Reports",
        //   icon: "mdi-security",
        //   items: [
        //     {
        //       title: "Intent spoofing",
        //       icon: "mdi-login-variant",
        //       scrollId: "#aaaa",
        //     },
        //     {
        //       title: "Unauthorized Intent Receipt",
        //       icon: "mdi-exclamation",
        //       scrollId: "#aaaa",
        //     },
        //   ],
        // },
        // {
        //   expansionPanel: false,
        //   title: "PDF Report",
        //   icon: "mdi-file-document-outline",
        //   scrollId: "#aaaa",
        // },
        // {
        //   expansionPanel: false,
        //   title: "Link to DevSecOps",
        //   icon: "mdi-dialpad",
        //   scrollId: "#aaaa",
        // },
      ],
      show: true,
      expand: false,
    };
  },
  props: {
    services: Array,
    isServices: Boolean,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    scrollToComponent(scrollId) {
      this.$vuetify.goTo(document.querySelector(scrollId));
    },
  },
};
</script>

<style>
.navigation .v-expansion-panel--active > .v-expansion-panel-header,
.navigation .v-expansion-panel-header {
  border-radius: 0;
  min-height: 40px;
}

.navigation .v-icon.v-icon {
  width: 1.6rem !important;
  height: 1.6rem;
  line-height: 1.6rem;
}

.navigation .v-expansion-panel-content__wrap,
.navigation .items {
  padding: 3px !important;
}

.navigation .item-expansion-hover {
  transition-duration: 900ms;
}

.navigation .item-expansion-hover:hover {
  margin-left: 8px !important;
}

.navigation .v-list-item-group .v-list-item--active {
  color: #60740a;
}

.navigation .v-list-item:hover {
  color: #89a606 !important;
}

.hovrr-color:hover {
  color: #89a606 !important;
}

.navigation .v-list-item--dense .v-list-item__title,
.navigation .v-list-item--dense .v-list-item__subtitle,
.navigation .v-list--dense .v-list-item .v-list-item__title,
.navigation .v-list--dense .v-list-item .v-list-item__subtitle {
  font-weight: 400;
}
</style>
