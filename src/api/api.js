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
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
            .then(response => {
                return response.data;
            });
    }
}

export const follow = {
    unfollow(id) {
        return instance.delete(`follow/${id}`) 
            .then(response => {
                return response.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`) 
            .then(response => {
                return response.data;
            });
    }
}

