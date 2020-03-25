<template>
    <div class="user-display" v-if="userdata != null">
        <h2>Logged in as...</h2>
        <span>{{ userdata.login }}</span>
    </div>
</template>

<script>

import GithubService from '../services/GithubService'

export default {
    data: function() {
        return {
            userdata: null
        }
    },
    methods: {
        getUserData() {
            GithubService.requestUserData().then(response => {
                this.userdata = response
            })
        }
    },
    created: function() {
        this.getUserData()
    }
}
</script>