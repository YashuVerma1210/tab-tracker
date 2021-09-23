
<template>
  <div>
    <h2>Register Page</h2>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model.lazy.trim="email"
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model.lazy.trim="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style scoped>
</style>