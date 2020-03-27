<template>
    <div class="repoview">
        <!-- Repo view... -->
        Repo detail {{ $route.params.owner }} | {{ $route.params.repo }}
        <RepoDetail v-bind:repo="repoData"/>
    </div>
</template>

<script>
import RepoDetail from '../components/details/RepoDetail.vue'
import GithubService from '../services/GithubService'

export default {
    data: function() {
        return {
            repoData: null
        }
    },
    components: {
        RepoDetail
    },
    methods: {
        getData() {
            GithubService.getOwnerRepo(this.$route.params.owner, this.$route.params.repo).then(data => {
                this.repoData = data
                console.log(this.repoData)
            })
        }
    },
    created: function() {
        this.getData()
    }
}
</script>