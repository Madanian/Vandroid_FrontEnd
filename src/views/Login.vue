<template>
  <card-with-image>
    <div slot="rightPart">
      <v-toolbar class="elevation-0 mb-3">
        <v-toolbar-title
          class="mx-auto"
          style="font-size: 1.47rem; font-weight: 400"
          ><b>Welcom</b></v-toolbar-title
        >
      </v-toolbar>

      <v-form @submit.prevent="onSubmit">
        <Input
          outlined
          dense
          name="username"
          type="username"
          v-model.trim="formData.username"
          labelTag
          labelText="Username"
          placeholder="Username"
          hide_details
          class="mb-3"
        />
        <Input
          outlined
          dense
          name="password"
          type="password"
          v-model.trim="formData.password"
          labelTag
          labelText="Password"
          placeholder="Password"
          hide_details
        />

        <v-row class="my-2">
          <v-col cols="12" sm="12" md="6">
            <v-checkbox
              v-model.trim="formData.rememberMe"
              label="remember me"
              color="info"
              hide-details
            ></v-checkbox>
          </v-col>

          <v-col cols="12" sm="12" md="12" class="mt-5 mb-0">
            <p>
              <small>
                <a
                  href="/forgetPassword"
                  style="color: #7ec2d1"
                  title="Forget Password"
                >
                  Forget Password
                </a>
              </small>
            </p>
          </v-col>
        </v-row>

        <Button
          input_value="Login"
          type="submit"
          color="#7ec2d1"
          block
          large
          class="mb-3"
        >
        </Button>
      </v-form>
      <v-divider class="mt-1 mb-5"></v-divider>

      <p class="mb-8 text-center text--secondary">
        <small>Don't have an account?</small>
        <small>
          <a href="/register" style="color: #7ec2d1" title="Register">
            Register
          </a>
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
  name: "Login",
  components: {
    CardWithImage,
    Button,
    Input,
  },
  data() {
    return {
      formData: {
        username: "",
        password: "",
        // rememberMe: false,
      },
      items: [
        {
          src: require("@/assets/images/1.jpg"),
        },
        {
          src: require("@/assets/images/2.jpg"),
        },
        {
          src: require("@/assets/images/3.jpg"),
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      //console.log(this.formData);
      const data = this.formData;
      this.$store.dispatch('login', {data})
      // this.$store.commit("login", "absdf");
      router.push("/choose-app");
    },
    logout() {
      this.$store.commit("logout");
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
