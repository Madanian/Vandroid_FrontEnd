<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <v-row slot="contentOfCard" no-gutters>
      <v-col cols="12" sm="6" md="6" lg="6">
        <div>
          <v-icon class="ma-0 pa-0 mr-1 mt-n2" color="black" size="20">
            mdi-file-outline
          </v-icon>
          <span style="font-size: 1.1rem"><b>File Information</b></span>
        </div>

        <div class="ml-10 mt-2">
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Name: </b>{{ information.file_name }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Size: </b>{{ information.file_size }}
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <div>
          <v-icon class="ma-0 pa-0 mr-1 mt-n2" color="black" size="18">
            mdi-application-outline
          </v-icon>
          <span style="font-size: 1.1rem"><b>App Information</b></span>
        </div>

        <div class="ml-10 mt-2">
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Name: </b>{{ information.app_name }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Package Name: </b>{{ information.app_package }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Label: </b>{{ information.app_lable }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Icon: </b>{{ information.app_icon }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Min SDK Version: </b>{{ information.app_MinSDKVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Target SDK Version: </b>{{ information.app_TargetSDKVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Max SDK Version: </b>{{ information.app_MaxSDKVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Android Version Code: </b
            >{{ information.app_AndroidVersionCode }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Android Version Name: </b
            >{{ information.app_AndroidVersionName }}
          </div>
        </div>
      </v-col>
    </v-row>
  </Card>
</template>

<!-- <div style="font-size: 0.9rem" class="mb-1">MD5: {{ information.MD5 }}</div>
            <div style="font-size: 0.9rem">sha-256: {{ information.sha }}</div> -->

<script>
import Card from "@/components/Basics/Card.vue";
export default {
  name: "InformationCard",
  data() {
    return {
      cardTitel: "General Information",
      cardIcon: "mdi-information-outline",
    };
  },
  props: {
    information: Object,
  },
  components: {
    Card,
  },
};
</script>
