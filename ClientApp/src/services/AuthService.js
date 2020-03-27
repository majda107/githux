const axios = require('axios')
const endpoint = "https://auth.majdatrpkos.cz"

export default {
    getToken(code) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/auth/getToken?code=${code}`).then(response => {

                let params = new URLSearchParams(response.data["token"])
                let token = params.get('access_token')
    
                if (token != null) {
                    console.log(token)
                } else {
                    console.log("INVALID CODE")
                    reject()
                }
    
                resolve(token)
            })
        })
    },

    logout() {
        window.location.href = "https://githux.majdatrpkos.cz/"
    }
}