import axios from 'axios'

const url = 'https://desapp-grupo-n-012021-backend.herokuapp.com/api/user'

export const register = async (username, platform, email, password) => {
    const endpoint = '/register';
    const data = {
        email: email,
        username: username,
        platform: platform,
        password: password
    }
    return axios.post(url + endpoint, data);
}

export const login = async (username, password) => {
    const endpoint = '/login'
    const data = {
        password: password,
        username: username
    }
    return axios.post(url + endpoint, data)
}

export const me = async () => {
    const endpoint = '/me'
    const header = { headers: { Authentication: localStorage.getItem('auth') } }
    return axios.get(url + endpoint, header);
}

export const subscribe = async (titleId, urlToRedirect) => {
    const endpoint = '/subscribe'
    const header = {
        headers: {
            Authorization: localStorage.getItem('apiKey'),
            Authentication: localStorage.getItem('auth')
        }
    }
    const data =
    {
        titleId: titleId,
        url: urlToRedirect
    }
    return axios.post(url + endpoint, data, header)
}