<template>
  <div>
    <Header :leftIcons="leftIcons" :color="color"></Header>

    <v-main>
      <!-- <v-container fill-height>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="10" sm="10" md="10">
            <v-card class="mx-auto card">
              <v-file-input
                v-model="files"
                color="deep-purple accent-4"
                counter
                label="File input"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                  >
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="text-overline grey--text text--darken-3 mx-2"
                  >
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
      <v-card class="d-flex align-center" flat height="90vh" tile>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="3" sm="3" md="3">
            <v-file-input
              v-model="files"
              color="#2b8700"
              counter
              label="Choose Your Application Files"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="#329505"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "ChooseApp",
  data() {
    return {
      leftIcons: [
        { id: 1, name: "mdi-magnify", link: "#" },
        { id: 2, name: "mdi-earth", link: "#" },
      ],
      color: "#f2f4f4",
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.co{
    color: #329505;
}
</style>
