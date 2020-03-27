<template>
  <img class="avatar" v-bind:src="url" alt="Avatar" v-on:click="logout" />
</template>

<script>
import AuthService from "../../services/AuthService";

export default {
  props: ["url"],
  methods: {
    logout() {
      AuthService.logout();
    }
  }
};
</script>

<style lang="sass" scoped>
.avatar
  width: 40px
  height: 40px
  border-radius: 20px
</style>