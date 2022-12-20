<template>
  <v-navigation-drawer
    v-model="show"
    app
    color="#f2f4f4"
    @click="onClick"
  >
    <!-- header -->
    <template v-slot:prepend>
      <a href="#" title="VAndroid">
        <v-list-item>
          <img
            src="@/assets/images/vandroid.png"
            width="200px"
            height="37px"
            class="my-5 mx-auto"
          />
        </v-list-item>
      </a>
    </template>

    <v-list dense style="margin: 0 1rem">
      <v-container class="panel-container" v-if="isServices">
        <v-expansion-panels
          accordion
          flat
          style="border: 1px solid #dfe3e7"
          :value="0"
        >
          <v-expansion-panel v-for="service in services" :key="service.name">
            <router-link
              to="#"
              style="color: #8494a7"
              :title="service.name"
              class="text-decoration-none"
            >
              <v-expansion-panel-header
                style="height: 4vh"
                class="px-0 py-0"
                color="white"
              >
                <v-icon small color="#8494A7"> {{service.icon}} </v-icon>
                <p class="my-auto" style="font-size: 1rem">{{service.name}}</p>
                <v-badge inline color="red accent-1" content="2"></v-badge>
              </v-expansion-panel-header>
            </router-link>

            <v-expansion-panel-content class="icon-panel" color="white">
              <v-divider class="mx-4"></v-divider>
              <v-list-item
                v-for="item in service.items"
                :key="item.title"
                style="display: block; margin: 0 11px; padding: 10px 9px"
                class="pl-0"
              >
                <router-link
                  :to="item.link"
                  :title="item.title"
                  class="text-decoration-none aHover"
                  style="display: block"
                >
                  <v-list-item-icon class="ml-4 mr-n1" style="display: inline">
                    <v-icon small color="#8494A7"> {{ item.icon }} </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content style="display: inline">
                    <v-list-item-title
                      class="px-0"
                      style="color: #8494a7; display: inline; font-size: 1rem"
                    >
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>

      <v-list-item class="px-0">
        <v-list-item-content class="pa-0 ma-0">
          <v-list-item-title class="px-0 titr">
            <p class="my-auto mr-5">{{ categorys[0].name }}</p>
          </v-list-item-title>

          <v-list
            dense
            class="py-0"
            v-for="category in categorys"
            :key="category.name"
          >
            <v-list-item
              v-for="item in category.items"
              :key="item.title"
              link
              class="ma-0 listI"
              :class="{ activeClass: item.active }"
            >
              <router-link
              
                :to="item.link"
                class="text-decoration-none"
                style="color: #8494a7; padding: 10px 0"
              >
                <!-- 5a8dee -->
                <v-list-item-icon class="ml-4" style="display: inline">
                  <v-icon color="#8494A7"> {{ item.icon }} </v-icon>
                </v-list-item-icon>
                <v-list-item-content class="py-0" style="display: inline">
                  <v-list-item-title
                    class="px-0"
                    style="display: inline; font-size: 1rem"
                  >
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list>

          <!-- <v-list-item-subtitle>
            <v-expansion-panels accordion flat active-class id="borderPanels">
              <v-expansion-panel @click="changeColor">
                <router-link
                  to="#"
                  style="color: #8494a7"
                  title="داشبورد"
                  class="text-decoration-none"
                >
                  <v-expansion-panel-header
                    style="height: 4vh"
                    class="pa-0"
                    :color="color"
                  >
                    <v-icon color="#8494A7" class="ma-0 pa-0">
                      mdi-home-outline
                    </v-icon>
                    <p class="my-auto" style="font-size: 1rem">داشبورد</p>
                    <v-badge inline color="red accent-1" content="2"></v-badge>
                  </v-expansion-panel-header>
                </router-link>

                <v-expansion-panel-content class="icon-panel" :color="color">
                  <v-divider class="mx-4"></v-divider>
                  <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    style="display: block; margin: 0 11px; padding: 10px 9px"
                    class="pl-0"
                  >
                    <router-link
                      :to="item.link"
                      :title="item.title"
                      class="text-decoration-none aHover"
                      style="display: block"
                    >
                      <v-list-item-icon
                        class="ml-4 mr-n1"
                        style="display: inline"
                      >
                        <v-icon small color="#8494A7"> {{ item.icon }} </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content style="display: inline">
                        <v-list-item-title
                          class="px-0"
                          style="
                            color: #8494a7;
                            display: inline;
                            font-size: 1rem;
                          "
                        >
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </router-link>
                  </v-list-item>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      categorys: [
        {
          name: "name",
          items: [
            {
              title: "text1",
              icon: "mdi-face-agent",
              link: "#",
              active: false,
            },
            {
              title: "text2",
              icon: "mdi-file-document-outline",
              link: "appchat",
              active: false,
            },
            {
              title: "text3",
              icon: "mdi-puzzle-outline",
              link: "#",
              active: false,
            },
          ],
        },
      ],
      show: true,
      color: "#f2f4f4",
      expand: false,
    };
  },
  props: {
    services: Array,
    isServices: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    changeColor() {
      const item = document.getElementById("borderPanels");
      if (this.expand == false) {
        item.classList.add("borderPanelsClass");
        this.color = "white";
      } else {
        this.color = "#f2f4f4";
        item.classList.remove("borderPanelsClass");
      }
      this.expand = !this.expand;
    },
  },
};
</script>

<style>
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 48px;
}

.v-icon.v-icon {
  font-size: 1.4rem;
  width: 1.6rem !important;
  height: 1.6rem;
  line-height: 1.6rem;
  margin: 0;
}

.v-expansion-panel-content__wrap {
  padding: 0 !important;
}

.panel-container {
  padding: 0;
}

.titr {
  margin-top: calc(1.7rem);
  margin-bottom: 0.5rem !important;
  font-size: 0.8rem;
  color: #bac0c7;
}

.borderPanelsClass {
  border: 1px solid #dfe3e7;
}

.aHover {
  transition-duration: 900ms;
}

.aHover:hover {
  padding-right: 10px;
}

.activeClass {
  background-color: #dbe5f3;
}

.listI:hover {
  color: transparent !important;
}
</style>
