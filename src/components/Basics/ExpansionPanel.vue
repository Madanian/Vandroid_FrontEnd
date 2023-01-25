<template>
  <!-- <v-expansion-panels class="result">
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
            :key="item.id"
            :readonly="
              !(
                item.Authority == null &&
                item.permissionName == null
              )
            "
          >
            <v-expansion-panel-header
              expand-icon="mdi-menu-down"
              style="background: #c2e4ed"
              :hide-actions="
                !(
                  item.Authority == null &&
                  item.permissionName == null
                )
              "
            >
              <div>
                <v-row>
                  <v-col cols="12" sm="7" md="7" lg="7">
                    <span style="font-size: 0.9rem"
                      ><b>Name: </b>{{ item.name }}</span
                    >
                  </v-col>

                  <v-col cols="12" sm="5" md="5" lg="5">
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
                </v-row>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pt-4"
              v-if="
                !(
                  item.Authority == null &&
                  item.permissionName == null
                )
              "
            >
              <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <span style="font-size: 0.9rem"
                    ><b>Permission: </b>{{ item.permissionName }}</span
                  >
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="6">
                  <span style="font-size: 0.9rem"
                    ><b>Authority: </b>{{ item.Authority }}</span
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels> -->
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
            :key="item.id"
          >
            <v-expansion-panel-header
              expand-icon="mdi-menu-down"
              style="background: #c2e4ed"
            >
              <div>
                <v-row>
                  <v-col cols="12" sm="7" md="7" lg="7" v-if="!(item.name == '') && !(item.name == null)">
                    <span style="font-size: 0.9rem"
                      ><b>Name: </b>{{ item.name }}</span
                    >
                  </v-col>

                  <v-col cols="12" sm="5" md="5" lg="5" v-if="!(item.exported === '') && !(item.exported === null)">
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
                </v-row>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pt-4"
            >
              <v-row>
                <v-col cols="12" sm="12" md="6" lg="6" v-if="
                      !(item.permissionName == '') &&
                      !(item.permissionName == null)
                    ">
                  <span style="font-size: 0.9rem"
                    ><b>Permission: </b>{{ item.permissionName }}</span
                  >
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="6" v-if="
                      !(item.Authority == '') &&
                      !(item.Authority == null)
                    ">
                  <span style="font-size: 0.9rem"
                    ><b>Authority: </b>{{ item.Authority }}</span
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ExpansionPanel",
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
