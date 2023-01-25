<template>
  <div>
    <Header :color="headerColor"></Header>
    <v-card
      class="d-flex align-center background-image"
      flat
      height="100vh"
      color="transparent"
    >
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="12" class="mb-16">
          <v-row align="center" justify="center">
            <v-col cols="8" sm="5" md="3" lg="3">
              <FileInput></FileInput>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12">
          <v-row justify="center">
            <v-col cols="9" sm="8" md="6" lg="6">
              <Combobox
                @selectedItems="selectItem"
                :items="ComboboxItems"
              ></Combobox>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12">
          <v-row justify="center">
            <v-col cols="4" sm="2" md="2" lg="2">
              <Button
                input_value="Analyze"
                color="#7ec2d1"
                block
                class="mt-16"
                @click="submitData"
              ></Button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FileInput from "@/components/Basics/FileInput.vue";
import Combobox from "@/components/Basics/Combobox.vue";
import Button from "@/components/Basics/Button.vue";
import router from "@/router";
export default {
  name: "ChooseApp",
  data() {
    return {
      // rightIcons: [{ id: 1, name: "mdi-earth", link: "#" }],
      ComboboxItems: [
        "ApplicationPolicyFile",
        "ApplicationPolicyFile2",
        "ApplicationPolicyFile3",
        // "Telegram",
        // "Whatsapp",
        // "Eitaa",
        // "Soroush",
        // "Bale",
        // "Imo",
      ],
      headerColor: "#c2e4ed",
      comboboxSelectItems: [],
    };
  },
  components: {
    Header,
    Footer,
    FileInput,
    Combobox,
    Button,
  },
  methods: {
    selectItem(selectItems) {
      this.comboboxSelectItems = selectItems;
    },
    submitData() {
      if (this.comboboxSelectItems.length > 0) {
        var nameAppPass = this.comboboxSelectItems[0];
        this.$store.state.nameAppPass = nameAppPass;
        this.$store.dispatch("addData", nameAppPass);
        router.push("/app-analysis");
      } else {
        alert("You Should Choose the Name of a Application!");
      }
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
