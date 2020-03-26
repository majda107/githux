<template>
    <div class="login-bar">
        Login bar
        <hr>
        <div v-if="!loggedIn">
            <Login v-if="code == null"/>
        </div>
        <div v-else>
            Logged in!
        </div>
    </div>
</template>

<script>
// import HelloWorld from './Login'
import { State } from '../services/State'
import AuthService from '../services/AuthService'
import Login from './Login'

export default {
    data: function() {
        return {
            code: null,
            loggedIn: false
        }
    },
    methods: {
        getCode() {
            console.log("Getting code from url")
            // console.log(this.$route)

            if(window.location.search == "") return null

            console.log(window.location.search)
            let params = new URLSearchParams(window.location.search)
            return params.get('code')
        },

        handleToken(token) {
            if(token == null) {
                this.code = null
                State.code = null
                this.loggedIn = false
            } else {
                this.loggedIn = true
                State.setToken(token)
            }
        }
    },
    components: {
        Login
    },
    created: function() {
        State.code = this.getCode()
        this.code = State.code

        if(this.code != null) {
            console.log("Asking for token...")
            AuthService.getToken(this.code).then(token => {
                console.log(`~ Received token: ${token}`)
                this.handleToken(token)
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.login-bar
    border: 1px solid black
</style>