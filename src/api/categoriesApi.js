import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll: (params) => {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },

  getByName: (name) => {
    const url = `/categories?name=${name}`;
    return axiosClient.get(url);
  },
}

export default categoriesApi;