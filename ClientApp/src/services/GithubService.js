const axios = require('axios')
import { State } from './State'

const endpoint = "https://api.github.com"

export default {


    getHeaders() {
        return { 'Authorization': `Bearer ${State.token}` }
    },

    getUserData() {
        return new Promise((resolve) => {
            axios.get(`${endpoint}/user`, { headers: this.getHeaders() }).then(response =>{
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
    
    searchRepos(query) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/search/repositories&q=${query}`, { headers: this.getHeaders() }).then(
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