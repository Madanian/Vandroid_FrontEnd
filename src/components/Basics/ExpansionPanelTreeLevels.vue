<template>
  <v-expansion-panels class="result">
    <v-expansion-panel style="background: #ffffff">
      <v-expansion-panel-header
        expand-icon="mdi-menu-down"
        style="background: #c2e4ed"
      >
        <span style="font-size: 1rem"
          ><b>{{ headerName }}</b></span
        >
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pt-4">
        <v-expansion-panels multiple>
          <v-expansion-panel
            v-for="item in items"
            :key="item.name"
            :readonly="!item.filterCheck"
          >
            <v-expansion-panel-header
              expand-icon="mdi-menu-down"
              style="background: #c2e4ed"
              :hide-actions="!item.filterCheck"
            >
              <div>
                <v-row>
                  <v-col cols="12" sm="4" md="4" lg="4">
                    <span style="font-size: 0.9rem"
                      ><b>Name: </b>{{ item.name }}</span
                    >
                  </v-col>
                  <v-col cols="12" sm="2" md="2" lg="2">
                    <span style="font-size: 0.9rem">
                      <b>Exported: </b>
                      <span
                        style="color: green; font-size: 1rem"
                        :class="{ 'false-color': !item.exported }"
                        >{{
                          item.exported.toString().charAt(0).toUpperCase() +
                          item.exported.toString().slice(1)
                        }}</span
                      >
                    </span>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <span style="font-size: 0.9rem"
                      ><b>Permission: </b>{{ item.permission }}</span
                    >
                  </v-col>
                </v-row>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pt-4"
              v-if="item.filters.length != 0"
            >
              <div class="mb-4" style="font-size: 0.9rem">
                <b>Interfaces</b>
              </div>
              <v-expansion-panels multiple>
                <v-expansion-panel
                  v-for="filter in item.filters"
                  :key="filter.id"
                >
                  <v-expansion-panel-header
                    expand-icon="mdi-menu-down"
                    style="background: #c2e4ed"
                  >
                    <div>
                      <span style="font-size: 0.9rem"
                        ><b>Name: </b>{{ filter.id }}</span
                      >
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pt-4">
                    <v-row>
                      <v-col cols="12" sm="12" md="6" lg="6">
                        <span class="mb-4" style="font-size: 0.9rem">
                          <b>Actions</b>
                        </span>
                        <v-list flat class="pa-0">
                          <v-list-item
                            v-for="action in filter.actions"
                            :key="action"
                            class="pa-0"
                          >
                            <v-list-item-icon class="ma-0 my-auto mt-3">
                              <v-icon color="black" small
                                >mdi-circle-medium</v-icon
                              >
                            </v-list-item-icon>

                            <v-list-item-content class="pa-0">
                              <v-list-item-title>
                                {{ action }}
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-col>

                      <v-col cols="12" sm="12" md="6" lg="6">
                        <span
                          class="mb-4"
                          style="font-size: 0.9rem"
                          v-if="filter.categoriesCheck"
                        >
                          <b>Categories</b>
                        </span>

                        <v-list-item
                          v-for="category in filter.categories"
                          :key="category"
                          class="pa-0"
                        >
                          <v-list-item-icon class="ma-0 my-auto mt-3">
                            <v-icon color="black" small
                              >mdi-circle-medium</v-icon
                            >
                          </v-list-item-icon>

                          <v-list-item-content class="pa-0">
                            <v-list-item-title>{{
                              category
                            }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ExpansionPanelTreeLevels",
  data() {
    return {};
  },
  props: {
    items: Array,
    headerName: String,
  },
  mounted() {},
};
</script>

<style>
.false-color {
  color: red !important;
}

.result .v-list-item {
  min-height: 33px;
}
</style>
