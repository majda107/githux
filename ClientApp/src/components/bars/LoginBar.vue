<template>
  <div class="login-bar">
    <md-toolbar class="md-primary" md-elevation="0">
      <div class="md-toolbar-row">
        <div v-if="!getLoggedIn">
          <Login/>
        </div>
        <div v-if="getUserdata != null">{{ getUserdata.login }}</div>
        <div v-if="getUserdata != null" class="avatar">
          <Avatar v-bind:url="getUserdata.avatar_url" />
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Login from "../Login";
import Avatar from "../miscs/Avatar";

export default {
  data: function() {
    return {
      // code: null,
      // loggedIn: false,
      // userdata: null
    };
  },
  methods: {
    ...mapActions(['fetchCode', 'fetchToken', 'fetchUserdata']),
  },
  components: {
    Login,
    Avatar
  },
  created: function() {
    this.fetchCode()
    this.fetchToken()
  },
  updated: function() {
    this.fetchUserdata()
  },
  computed: {
    ...mapGetters(['getCode', 'getToken', 'getLoggedIn', 'getUserdata'])
  }
};
</script>

<style lang="sass" scoped>
// .login-bar
//     border: 1px solid black
.avatar
  margin-left: 14px  
</style>