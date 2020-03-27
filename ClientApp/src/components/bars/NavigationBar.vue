<template>
  <div>
      <md-tabs class="md-primary" md-alignment="centered" my-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/home" router-link>
          <!-- <router-view></router-view> -->
        </md-tab>
        <md-tab id="tab-repositories" md-label="Repositories" to="/repositories" router-link>
          <!-- <router-view></router-view> -->
        </md-tab>
        <md-tab id="tab-gists" md-label="Gists" to="/gists" router-link>
          <!-- <router-view></router-view> -->
        </md-tab>

        <md-tab v-if="loggedIn" id="tab-me" md-label="Me" to="/me" router-link>
          <!-- <router-view></router-view> -->
        </md-tab>
      </md-tabs>
  </div>
</template>

<script>
export default {
  props: [
    'loggedIn'
  ],
  methods: {}
};
</script>