<template>
    <div class="user-display" v-if="userdata != null">
        <h2>Logged in as...</h2>
        <span>{{ userdata.login }}</span>
        <Repos v-if="userrepos != null" v-bind:repos="userrepos"/>
    </div>
</template>

<script>

import GithubService from '../services/GithubService'

import Repos from './Repos'

export default {
    data: function() {
        return {
            userdata: null,
            userrepos: null
        }
    },
    components: {
        Repos
    },
    methods: {
        getUserData() {
            GithubService.getUserData().then(response => {
                this.userdata = response
            })
        },

        getUserRepos() {
            GithubService.getUserRepos().then(response => {
                console.log(response)
                this.userrepos = response
            })
        }
    },
    created: function() {
        console.log("User display created!")
        this.getUserData()
        this.getUserRepos()
    }
}
</script>