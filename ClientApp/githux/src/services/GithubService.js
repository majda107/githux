const axios = require('axios')
import { State } from './State'

const endpoint = "https://api.github.com"

export default {
    requestUserData() {
        return new Promise((resolve) => {
            axios.get(`${endpoint}/user`, { headers: { 'Authorization': `Bearer ${State.token}` } }).then(response =>{
                console.log(response.data)
                // this.userdata = response.data
                resolve(response.data)
            })
        })
    }
}