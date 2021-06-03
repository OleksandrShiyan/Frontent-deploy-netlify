import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://server-shiyan.herokuapp.com/api/'
    // baseURL: 'http://localhost:8080/api/'
})

export const usersAPI = {
    getUsers() {
        return instance.get(`user`).then(response => response.data)
    },
    updateUser(id, email, password, isAdmin) {
        return instance.put(`user`, {id, email, password, isAdmin})
    },
    deleteUser(id) {
        return instance.delete(`user/` + id)
    }
}

export const profilesAPI = {
    getUserProfiles(userId) {
        debugger;
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getAllProfiles(){
        return instance.get(`profile`).then(response => response.data);
    },
    updateUserProfile(fullname, sex, birth, city, id, user_id){
        return instance.put(`profile`, {fullname, sex, birth, city, id, user_id})
    },
    deleteProfile(id){
        return instance.delete(`profile/` + id);
    },
    createProfile(fullname, sex, birth, city, user_id){
        return instance.post(`profile`, {fullname, sex, birth, city, user_id});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    signup(email, password, isAdmin) {
        return instance.post(`user`, {email, password, isAdmin})
    }
}

export const dashboardAPI = {
    dashboard() {
        return instance.get(`dashboard`);
    }
}