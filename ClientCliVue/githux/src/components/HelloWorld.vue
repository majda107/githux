<template>
  <div class="hello">

  </div>
</template>

<script>
import TestService from '../services/TestService'
import GithubService from '../services/GithubService'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created: function() {
    TestService.sendRequest().then((result) => {
      console.log(result)
    })
    TestService.someDataLikeToken = "b"
    console.log("hello from helloworld.vue!")

    GithubService.requestUserData()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
