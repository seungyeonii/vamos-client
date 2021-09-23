import {API_BASE_URL} from '../constants';

const request = (options) => {
    options = Object.assign({'credentials': 'include'}, options);

    return fetch(options.url, options)
            .then(json => {
                if (!json.ok) {
                    return Promise.reject(json)
                }
                return json;
            })
}

export function getCurrentUser() {
    return request({
        headers: {
            'Accept': 'application/json',
        },
        url: API_BASE_URL + "/user/me",
        method: 'GET',
    })
}

export function login(loginRequest) {
    return request({
        headers: {
            'Content-Type': 'application/json',
        },
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest),
    })
}

export function logout() {
    return request({
        url: API_BASE_URL + "/auth/logout",
        method: 'POST'
    })
}

export function signup(signupRequest) {
    return request({
        headers: {
            'Content-Type': 'application/json',
        },
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}