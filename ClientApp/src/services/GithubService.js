const axios = require('axios')
// import { State } from './State'

// import { mapGetters } from "vuex";
import store from '../store/store'

const endpoint = "https://api.github.com"

export default {


    getHeaders() {
        let token = store.getters.getToken

        console.log(`[GithubService] Extracted token from store... ${token}`)
        return { 'Authorization': `Bearer ${token}` }
    },

    getUserData() {
        return new Promise((resolve) => {
            axios.get(`${endpoint}/user`, { headers: this.getHeaders() }).then(response => {
                console.log(response.data)
                // this.userdata = response.data
                resolve(response.data)
            })
        })
    },

    getUserGists() {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/gists`, { headers: this.getHeaders() }).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    },

    getUserRepos() {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/user/repos`, { headers: this.getHeaders() }).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    },

    getOwnerRepo(owner, repo) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/repos/${owner}/${repo}`).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    },
    getOwnerRepoCommits(owner, repo) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/repos/${owner}/${repo}/commits`).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    },

    searchRepos(query) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/search/repositories?q=${query}`).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    },

    createUserGist(description, ispublic, files) {
        console.log(`[GithubService] Creating user gist: ${description} | ${ispublic} | ${files}`)
        return new Promise((resolve, reject) => {
            axios.post(`${endpoint}/gists`, {
                description: description,
                public: ispublic,
                files: files
            }, { headers: this.getHeaders() }).then(
                (response) => {
                    resolve(response.data)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    }
}