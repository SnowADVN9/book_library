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
  getById: (id) => {
    const url = `/categories?id=${id}`;
    return axiosClient.get(url);
  },
  addCategory: (categoryData) => {
    const url = "/categories";
    return axiosClient.post(url, categoryData);
  },
  updateCategory: (id, categoryData) => {
    const url = `/categories/${id}`;
    return axiosClient.put(url, categoryData);
  },

  deleteCategory: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  }
}

export default categoriesApi;