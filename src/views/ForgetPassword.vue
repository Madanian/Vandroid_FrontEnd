<template>
  <card-with-image>
    <div slot="rightPart">
      <v-toolbar class="elevation-0 mb-3">
        <v-toolbar-title
          class="mx-auto"
          style="font-size: 1.47rem; font-weight: 400"
          >رمز عبورتان را فراموش کرده اید؟</v-toolbar-title
        >
      </v-toolbar>

      <v-row class="justify-space-around mb-1">
        <v-col cols="5" sm="5" md="5">
          <Button
            input_value="Login"
            to="/login"
            color="info"
            dark
            block
            outlined
            large
          ></Button>
        </v-col>
        <v-col cols="5" sm="5" md="5">
          <Button
            input_value="Register"
            to="/register"
            color="#5a8dee"
            dark
            block
            outlined
            large
          ></Button>
        </v-col>
      </v-row>

      <p class="text-center">
        <small class="text-center">
          Enter the email or contact number you used to register to receive a
          temporary password
        </small>
      </p>

      <v-form @submit.prevent="" class="mt-4 mb-5">
        <Input
          outlined
          dense
          name="email-tellphone"
          type="text"
          v-model.trim="email"
          labelTag
          labelText="Email or Phone Number"
          placeholder="Email or Phone Number"
          class="mb-3"
        />
        <Button
          input_value="Send Passsword"
          color="#7ec2d1"
          to="/"
          dark
          block
          large
          class="px-0"
        >
        </Button>
      </v-form>

      <p class="text-center mb-8">
        <small>
          <a
            href="/login"
            style="color: gray"
            title="Remember Password"
            class="text-decoration-none"
          >
            I remembered my password
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
export default {
  name: "ForgetPassword",
  components: {
    CardWithImage,
    Button,
    Input,
  },
  data() {
    return {
      email: "",
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
  methods: {},
};
</script>
