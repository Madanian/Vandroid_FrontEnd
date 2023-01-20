<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <v-row slot="contentOfCard" no-gutters>
      <v-col cols="6" sm="6" md="6" lg="6">
        <div>
          <v-icon class="ma-0 pa-0 mr-1 mt-n2" color="black">
            mdi-home-outline
          </v-icon>
          <span style="font-size: 1.1rem"><b>File Information</b></span>
        </div>

        <div class="ml-10 mt-2">
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Name: </b>{{ file.name }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Size: </b>{{ file.size }}
          </div>
          <!-- <div style="font-size: 0.9rem" class="mb-1">MD5: {{ file.MD5 }}</div>
              <div style="font-size: 0.9rem">sha-256: {{ file.sha }}</div> -->
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6">
        <div>
          <v-icon class="ma-0 pa-0 mr-1 mt-n2" color="black">
            mdi-home-outline
          </v-icon>
          <span style="font-size: 1.1rem"><b>App Information</b></span>
        </div>

        <div class="ml-10 mt-2">
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Name: </b>{{ app.name }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Package Name: </b>{{ app.packageName }}
          </div>
          <div style="font-size: 0.9rem" class="mb-1">
            <b>Label: </b>{{ app.label }}
          </div>
          <div style="font-size: 0.9rem"><b>Icon: </b>{{ app.icon }}</div>
          <div style="font-size: 0.9rem">
            <b>Min SDK Version: </b>{{ app.minSdkVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Target SDK Version: </b>{{ app.targetSdkVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Max SDK Version: </b>{{ app.maxSdkVersion }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Android Version Code: </b>{{ app.androidVersionCode }}
          </div>
          <div style="font-size: 0.9rem">
            <b>Android Version Name: </b>{{ app.androidVersionName }}
          </div>
        </div>
      </v-col>
    </v-row>
  </Card>
</template>

<script>
import Card from "@/components/Basics/Card.vue";
export default {
  name: "ComponentsCard",
  data() {
    return {
      cardTitel: "Components",
      cardIcon: "mdi-puzzle-outline",

      file: {
        name: "name",
        size: "size KB",
        MD5: "MD5",
        sha: "sha-256",
      },
      app: {
        name: "name",
        packageName: "packageName",
        label: "label",
        icon: "icon",
        minSdkVersion: "minSdkVersion",
        targetSdkVersion: "targetSdkVersion",
        maxSdkVersion: "maxSdkVersion",
        androidVersionCode: "androidVersionCode",
        androidVersionName: "androidVersionName",
      },
    };
  },
  components: {
    Card,
  },
};
</script>
