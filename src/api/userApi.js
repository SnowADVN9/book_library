import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },

  register: (userData) => {
    const url = '/register/users';
    return axiosClient.post(url, userData);
  },

  login: (credentials) => {
    const url = '/login/users';
    return axiosClient.post(url, credentials);
  },

  updateUser: (id, userData) => {
    const url = `/users/${id}`;
    return axiosClient.put(url, userData);
  },

  deleteUser: (id) => {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  }
};

export default userApi;
