<template>
  <div class="login">
      <!-- <md-button class="md-raised md-primary" v-on:click="loginRedirect">Login</md-button> -->
      <button v-on:click="loginRedirect">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginRedirect() {
      window.location.href =
        "https://github.com/login/oauth/authorize?scope=gist&client_id=1e9353a52e2953a97cb0";
    }
  }
};
</script>