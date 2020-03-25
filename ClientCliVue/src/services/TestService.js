// import Vue from 'vue'
export default {

    someDataLikeToken: "a",
    sendRequest() {
      console.log("Running test service ... 5")
      console.log(this.someDataLikeToken)
      return new Promise((resolve) => {
          setTimeout(() => resolve(`done ${this.someDataLikeToken}`), 1000)
      })
    },

    test() {

    }
  }