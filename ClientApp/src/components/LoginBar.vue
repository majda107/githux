<template>
  <div class="login-bar">
    <md-toolbar class="md-primary" md-elevation="0">
      <div class="md-toolbar-row">
        <div v-if="!getLoggedIn">
          <Login/>
        </div>
        <!-- <div v-if="userdata != null">{{ userdata.login }}</div> -->
        <!-- <div v-if="userdata != null" class="avatar">
          <Avatar v-bind:url="userdata.avatar_url" />
        </div> -->
      </div>
    </md-toolbar>
  </div>
</template>

<script>
// import HelloWorld from './Login'
// import { State } from "../services/State";
// import AuthService from "../services/AuthService";
// import GithubService from "../services/GithubService";

import { mapGetters, mapActions } from "vuex";

import Login from "./Login";
// import Avatar from "./miscs/Avatar";

export default {
  data: function() {
    return {
      // code: null,
      // loggedIn: false,
      // userdata: null
    };
  },
  methods: {
    ...mapActions(['fetchCode', 'fetchToken']),
    // getCode() {
    //   console.log("Getting code from url");
    //   // console.log(this.$route)

    //   if (window.location.search == "") return null;

    //   console.log(window.location.search);
    //   let params = new URLSearchParams(window.location.search);
    //   return params.get("code");
    // },

    // handleToken(token) {
    //   if (token == null) {
    //     this.code = null;
    //     State.code = null;
    //     this.loggedIn = false;
    //   } else {
    //     this.loggedIn = true;
    //     State.setToken(token);
    //   }
    // }
  },
  components: {
    Login,
    // Avatar
  },
  created: function() {
    // State.$on("received-token", () => {
    //   GithubService.getUserData().then(data => {
    //     this.userdata = data;
    //   });
    // });

    this.fetchCode()
    this.fetchToken()
  },
  computed: {
    ...mapGetters(['getCode', 'getToken', 'getLoggedIn'])
  }
};
</script>

<style lang="sass" scoped>
// .login-bar
//     border: 1px solid black
.avatar
  margin-left: 14px  
</style>