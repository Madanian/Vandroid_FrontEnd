<template>
  <card-with-image>
    <div slot="rightPart">
      <v-toolbar class="elevation-0">
        <v-toolbar-title
          class="mx-auto"
          style="font-size: 1.47rem; font-weight: 400"
          >Register</v-toolbar-title
        >
      </v-toolbar>

      <v-form @submit.prevent="onSubmit" ref="form">
        <v-row class="mb-2 mt-4 justify-space-between">
          <v-col cols="12" sm="12" md="6">
            <Input
              outlined
              dense
              name="firstname"
              type="text"
              v-model.trim="formData.firstname"
              labelTag
              labelText="First Name"
              placeholder="First Name"
              hide_details
              class="mb-2"
            />
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <Input
              outlined
              dense
              name="lastname"
              type="text"
              v-model.trim="formData.lastname"
              labelTag
              labelText="Last Name"
              placeholder="Last Name"
              hide_details
              class="mb-2"
            />
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <Input
              outlined
              dense
              name="email"
              type="text"
              v-model.trim="formData.email"
              labelTag
              labelText="Email Address"
              placeholder="Email Address"
              hide_details
              class="mb-2"
            />
          </v-col>

          <v-col cols="12" sm="12" md="6">
            <Input
              outlined
              dense
              name="tell"
              type="number"
              v-model.trim="formData.tell"
              labelTag
              labelText="Phone Number"
              placeholder="Phone Number"
              hide_details
              class="mb-2"
            />
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <Input
              outlined
              dense
              name="password"
              type="password"
              v-model.trim="formData.password"
              labelTag
              labelText="Password"
              placeholder="Password"
              hint="At Least 8 Characters"
              class="mb-n2"
            />
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <Input
              outlined
              dense
              name="password"
              type="password"
              v-model.trim="formData.rePassword"
              labelTag
              labelText="Confirm Password"
              placeholder="Confirm Password"
              hint="At Least 8 Characters"
              class="mb-n2"
            />
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <Button
              input_value="Register"
              type="submit"
              color="#7ec2d1"
              block
              large
              class="my-2"
            >
            </Button>
          </v-col>
        </v-row>
      </v-form>

      <v-divider class="mb-5"></v-divider>

      <p class="text-center text--secondary">
        <small>Do have an account?</small>
        <small>
          <a href="/login" style="color: #7ec2d1" title="Login"> Login </a>
          <!-- <small style="display:inline"> <router-link to='/login'>ورود</router-link> </small> -->
        </small>
      </p>
    </div>
  </card-with-image>
</template>

<script>
import CardWithImage from "@/components/Basics/CardWithImage.vue";
import Button from "@/components/Basics/Button.vue";
import Input from "@/components/Basics/Input.vue";
import router from "@/router";
export default {
  name: "Register",
  components: {
    CardWithImage,
    Button,
    Input,
  },
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        tell: "",
        password: "",
        rePassword: "",
      },
      items: [
        {
          src: require("../assets/images/1.jpg"),
        },
        {
          src: require("../assets/images/2.jpg"),
        },
        {
          src: require("../assets/images/3.jpg"),
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.reset();
      //console.log(this.formData);
      // const data = this.formData;
      // this.$store.dispatch("register", { data });
      router.push("/choose-app");
    },
  },
};
</script>

<style scoped>
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  padding: 0.2rem;
}
</style>
