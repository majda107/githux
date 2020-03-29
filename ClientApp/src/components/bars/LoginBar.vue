<template>
  <!-- <div class="login-bar">
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
  </div>-->

  <div class="login-bar">
    <div v-if="!getLoggedIn">
      <Login />
    </div>
    <div class="logged" v-if="getUserdata != null">
      <div class="logged-name">{{ getUserdata.login }}</div>
      <div class="logged-avatar">
        <Avatar v-bind:url="getUserdata.avatar_url" />
      </div>
    </div>
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
    ...mapActions(["fetchCode", "fetchToken", "fetchUserdata"])
  },
  components: {
    Login,
    Avatar
  },
  created: function() {
    this.fetchCode();
    this.fetchToken().then(token => {
      if (token == null) return;
      this.fetchUserdata();
    });
  },
  //   updated: function() {
  //     this.fetchUserdata()
  //   },
  computed: {
    ...mapGetters(["getCode", "getToken", "getLoggedIn", "getUserdata"])
  }
};
</script>

<style lang="sass" scoped>
// .login-bar
//     border: 1px solid black

.logged
  display: flex
  flex-flow: row
  align-items: center

  .avatar
    margin-left: 14px  
</style>