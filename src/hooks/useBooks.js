import { useState, useEffect } from "react";
import bookApi from "../api/bookApi";

const useBooks = ({ bookId = null, category = null, name = null } = {}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (bookId) {
                    response = await bookApi.getById(bookId);
                } else if (category) {
                    response = await bookApi.getByCategory(category);
                } else if (name) {
                    response = await bookApi.getByName(name);
                } else {
                    response = await bookApi.getAll();
                }
                setBooks(response || []);
            } catch (err) {
                console.error('Failed to fetch product list: ', err);
            }
        };

        fetchData();
    }, [bookId, category, name]);

    return { books };
};

export default useBooks;