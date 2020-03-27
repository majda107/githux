<template>
  <md-avatar>
    <img v-bind:src="url" alt="Avatar" v-on:click="logout"/>
    <md-tooltip md-direction="bottom">Log-out</md-tooltip>
  </md-avatar>
</template>

<script>
import AuthService from '../../services/AuthService'

export default {
  props: ["url"],
  methods: {
    logout() {
      AuthService.logout()
    }
  }
};
</script>