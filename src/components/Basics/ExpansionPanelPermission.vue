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
          <v-expansion-panel v-for="item in items" :key="item.id">
            <v-expansion-panel-header
              expand-icon="mdi-menu-down"
              style="background: #c2e4ed"
            >
              <div>
                <v-row>
                  <v-col
                    cols="12"
                    sm="7"
                    md="7"
                    lg="7"
                    v-if="!(item.name == '') && !(item.name == null)"
                  >
                    <span style="font-size: 0.9rem"
                      ><b>Name: </b>{{ item.name }}</span
                    >
                  </v-col>

                  <v-col
                    cols="12"
                    sm="5"
                    md="5"
                    lg="5"
                    v-if="!(item.status === '') && !(item.status === null)"
                  >
                    <span style="font-size: 0.9rem">
                      <b>Status: </b>
                      <span style="color: green; font-size: 1rem">{{
                        item.status
                      }}</span>
                    </span>
                  </v-col>
                </v-row>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="6"
                  lg="6"
                  v-if="!(item.info == '') && !(item.info == null)"
                >
                  <span style="font-size: 0.9rem"
                    ><b>Information: </b>{{ item.info }}</span
                  >
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                  md="6"
                  lg="6"
                  v-if="
                    !(item.description == '') && !(item.description == null)
                  "
                >
                  <span style="font-size: 0.9rem"
                    ><b>Description: </b>{{ item.description }}</span
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
  name: "ExpansionPanelPermission",
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
