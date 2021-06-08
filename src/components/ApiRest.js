import axios from 'axios'

const url = 'https://desapp-grupo-n-012021-backend.herokuapp.com/api/user'

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
        password: password,
        username: username
    })
}

export const me = async() => {
    const endpoint = '/me'
    return axios.get(url + endpoint, { headers : { Authentication: localStorage.getItem('auth') } });
}