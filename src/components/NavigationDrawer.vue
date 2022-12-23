<template>
  <v-navigation-drawer
    width=" 284.16px"
    v-model="show"
    app
    :color="color"
    @click="onClick"
  >
    <v-list>
      <v-list-item to="/a">
        <img
          src="@/assets/images/vandroid.png"
          width="200px"
          height="37px"
          class="my-5 mx-auto"
        />
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense class="ml-3 mr-0 pr-1">
      <v-list-item-group>
        <div v-for="category in categorys" :key="category.title" class="items">
          <v-list-item
            :to="category.link"
            v-if="!category.expansionPanel"
            class="px-1 item-height"
          >
            <v-list-item-icon class="mx-0 mr-1">
              <v-icon small>{{ category.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-size: 0.8rem">{{
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
                    mdi-home-outline
                  </v-icon>
                  <span style="font-size: 0.8rem">{{ category.title }}</span>
                </div>
                <template v-slot:actions>
                  <v-icon small> $expand </v-icon>
                </template>
              </v-expansion-panel-header>

              <v-expansion-panel-content :color="color" class="pl-2">
                <div v-for="item in category.items" :key="item.title" class="item-expansion-hover">
                  <v-list-item :to="item.link">
                    <v-list-item-icon class="mx-0 mr-1">
                      <v-icon small>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
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
          icon: "mdi-google",
          link: "#",
        },
        {
          expansionPanel: true,
          title: "Permissions",
          icon: "mdi-shield-key-outline",
          items: [
            {
              title: "Uses Permissions",
              icon: "mdi-account-key-outline",
              link: "/b",
            },
            {
              title: "Custom Permissions",
              icon: "mdi-cellphone-key",
              link: "/c",
            },
            // mdi-format-list-bulleted-square
            { title: "API Permissions", icon: "mdi-folder-key", link: "/d" },
          ],
        },
        {
          expansionPanel: true,
          title: "Components",
          icon: "mdi-puzzle-outline",
          items: [
            { title: "Activities", icon: "mdi-account-key-outline", link: "/e" },
            { title: "Activity Alias", icon: "mdi-cellphone-key", link: "/f" },
            { title: "Services", icon: "mdi-folder-key", link: "/g" },
            { title: "Broadcast Receivers", icon: "mdi-folder-key", link: "/h" },
            { title: "Content Providers", icon: "mdi-folder-key", link: "/i" },
          ],
        },
        {
          expansionPanel: true,
          title: "Dynamic Registered Components",
          icon: "mdi-puzzle-outline",
          items: [
            {
              title: "Broadcast Receiver",
              icon: "mdi-account-key-outline",
              link: "j",
            },
          ],
        },
        {
          expansionPanel: false,
          title: "Intent Messages",
          icon: "mdi-file-document-outline",
          link: "k",
        },
        {
          expansionPanel: true,
          title: "Security Analysis Reports",
          icon: "mdi-puzzle-outline",
          items: [
            {
              title: "Intent spoofing",
              icon: "mdi-account-key-outline",
              link: "l",
            },
            {
              title: "Unauthorized Intent Receipt",
              icon: "mdi-account-key-outline",
              link: "m",
            },
          ],
        },
        {
          expansionPanel: false,
          title: "PDF Report",
          icon: "mdi-file-document-outline",
          link: "t",
        },
        {
          expansionPanel: false,
          title: "Link to DevSecOps",
          icon: "mdi-file-document-outline",
          link: "v",
        },
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
  },
};
</script>

<style>
.v-expansion-panel--active > .v-expansion-panel-header,
.v-expansion-panel-header {
  border-radius: 0;
  min-height: 40px;
}

.v-icon.v-icon {
  width: 1.6rem !important;
  height: 1.6rem;
  line-height: 1.6rem;
}

.v-expansion-panel-content__wrap,
.items {
  padding: 3px !important;
}

.item-expansion-hover {
  transition-duration: 900ms;
}

.item-expansion-hover:hover {
  margin-left: 8px !important;
}

.v-list-item-group .v-list-item--active {
  color: green;
}
</style>
