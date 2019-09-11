import * as axios from 'axios';

// создание инстанса (у axios есть такая функция)
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ae4c3a01-1d12-4498-85df-24268c218e2b"
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                debugger
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('/profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('/profile/status/', {status: status});
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    },

}

