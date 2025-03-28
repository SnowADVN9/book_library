import axiosClient from "./axiosClient";

const bookApi = {
  getAll: (params) => {
    const url = '/books';
    return axiosClient.get(url, { params });
  },

  getById: (id) => {
    const url = `/books?id=${id}`;
    return axiosClient.get(url);
  },

  getByCategory: (category) => {
    const url = `/books?category=${category}`;
    return axiosClient.get(url);
  },

  getByName: (name) => {
    const url = `/books?name=${name}`;
    return axiosClient.get(url);
  },

  addBook: (bookData) => {
    const url = "/books";
    return axiosClient.post(url, bookData);
  },

  updateBook: (id, bookData) => {
    const url = `/books/${id}`;
    return axiosClient.put(url, bookData);
  },

  deleteBook: (id) => {
    const url = `/books/${id}`;
    return axiosClient.delete(url);
  }
}

export default bookApi;