import axios from 'axios'

const url = 'https://vast-brushla-new-endpoi-ovtxj5.herokuapp.com/api/user'

export const register = async (username,platform, email, password) => {
    const endpoint = '/register';
    return axios.post(url + endpoint, {
        email: email,
        username: username,
        platform: platform,
        password: password
    });
}

export const login = async(username,password) => {
    const endpoint = '/login'
    return axios.post(url + endpoint, {
        username: username,
        password: password
    })
}