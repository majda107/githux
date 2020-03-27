<template>
  <div class="githux">
    <div class="githux-display" v-for="githux in allGithux" :key="githux.title">{{ githux.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Githux",
  //   methods: {
  //     loginRedirect() {
  //       window.location.href =
  //         "https://github.com/login/oauth/authorize?client_id=1e9353a52e2953a97cb0";
  //     }
  //   },
  methods: {
    ...mapActions(["fetchGithux"])
  },
  computed: mapGetters(["allGithux"]),
  created: function () {
      console.log("Fetching data")
      this.fetchGithux()
  }
};
</script>