// var router = new VueRouter({

// })

// if(window.location.search != "") {
//     let params = new URLSearchParams(window.location.search)
//     let code = params.get('code')

//     console.log(code)
// } else {
//     window.location.href = "https://github.com/login/oauth/authorize?client_id=1e9353a52e2953a97cb0"
// }


Vue.component('test-component', {
    template: '<div>I am little vue test component</div>'
})


Vue.component('login', {
    methods: {
        loginRedirect() {
            window.location.href = "https://github.com/login/oauth/authorize?client_id=1e9353a52e2953a97cb0"
        }
    },
    template: '<div class="login"><button v-on:click="loginRedirect">Login</button></div>'
})

Vue.component('auth', {
    props: [
        'code'
    ],
    data: function() {
        return {
            endpoint: 'https://auth.majdatrpkos.cz'
        }
    },
    methods: {
        getToken(code) {
            axios.get(`${this.endpoint}/auth/getToken?code=${code}`).then(response => {

                let params = new URLSearchParams(response.data["token"])
                let token = params.get('access_token')

                if(token != null) {
                    console.log(token)
                } else {
                    console.log("INVALID CODE")
                }

                this.$emit('received', token)
            })
        }
    },
    mounted: function() {
        console.log("MOUNTED!")
        // console.log(this.code)
        this.getToken(this.code)
    },
    template: '<div class="auth">Authenticating...</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        hasCode: false,
        code: null,
        token: null
    },
    methods: {
        getCode() {
            if(window.location.search == "") return null

            let params = new URLSearchParams(window.location.search)
            return params.get('code')
            // if(params.get('code') == null) return null
        },

        handleReceivedToken(token) {
            if(token != null) {
                this.token = token
            } else {
                this.hasCode = false
            }
        }
    },
    created: function() {
        // console.log("Created!")

        this.code = this.getCode()
        this.hasCode = (this.code == null)? false : true
    },
    template: '<div class="app"><div v-if="token == null"><login v-if="!hasCode"></login><auth v-else v-on:received="handleReceivedToken" v-bind:code="code"></auth></div><div v-else>Logged in!</div></div>'
})