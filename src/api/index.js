import * as axios from "axios";

const instance = axios.create({
  baseURL: 'http://178.172.137.98:3000/',
  headers: {'Authorization' : `Bearer ${localStorage.getItem("ChildAuthToken")}`},
});

export const authApi = {
  me () {
    return instance.get(`child-token`).then(res => res.data)
  },
  login (auth) {
    return new Promise(async(resolve, reject) => {
      try {
        const data = await instance.post(`childs/auth`, auth);
        if (data.data.status === 200) {
          localStorage.setItem("ChildAuthToken", data.data.token);
          instance.defaults.headers['Authorization'] = `Bearer ${data.data.token}`;
          resolve(data.data);
        } else {
          reject("Неверный логин или пароль");
        }
      } catch (e) {
        console.log("Login error: ", e);
      }
    })
  },
};

export const userApi = {
  getGroupsList () {
    return new Promise(async(resolve, reject) => {
      try {
        const data = await instance.get(`childs/get-groups`);
        resolve(data.data.groups);
      } catch (e) {
        console.log("Get groups list error: ", e);
      }
    })
  },
  getUserBills () {
    return new Promise(async(resolve, reject) => {
      try {
        const data = await instance.get(`/childs/get-active-bills`);
        resolve(data.data.data);
      } catch (e) {
        console.log("Get bills error: ", e);
      }
    })
  },
  getUserLessons () {
    return new Promise(async(resolve, reject) => {
      try {
        const data = await instance.get(`/childs/get-lessons`);
        resolve(data.data.data);
      } catch (e) {
        console.log("Get lessons error: ", e);
      }
    })
  }
}