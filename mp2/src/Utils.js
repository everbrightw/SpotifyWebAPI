import axios from 'axios'
import qs from 'querystring'


const client_id = "c64550a797cb4fc9931f45b4ca0e8c21";
const client_secret = "7c4d4382f48a40168a04273de0b91183";
const ONE_HOUR = 60 * 60 * 1000

class Utils{

    
    async getAuthToken() {
        const AUTH_TOKEN_KEY = 'auth-token'
        const LAST_AUTH_TIME_KEY = 'last-auth-time'
        let authToken = localStorage.getItem(AUTH_TOKEN_KEY)
        let lastAuthTime = new Date(localStorage.getItem(LAST_AUTH_TIME_KEY))
        let isExpired = new Date() - lastAuthTime >= ONE_HOUR
    
        if (!authToken || isExpired) {
          let data = await this.authenticate()
          authToken = data.access_token
          localStorage.setItem(AUTH_TOKEN_KEY, authToken)
          localStorage.setItem(LAST_AUTH_TIME_KEY, new Date().toISOString())
        }
    
        // console.log('authToken', authToken)
        return authToken
    }

    async authenticate() {

        let basicToken = new Buffer(`${client_id}:${client_secret}`).toString('base64')
        let res = await axios.post(
          'https://accounts.spotify.com/api/token',
          qs.stringify({ grant_type: 'client_credentials' }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Basic ' + basicToken
            }
          }
        )
    
        return res.data
    }


    async getConfig(){
        
        let auth_token = await this.getAuthToken();
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+ auth_token
            }
        }
        return config;
    }

}

export const utils = new Utils()