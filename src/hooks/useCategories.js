import { useState, useEffect } from "react";
import categoriesApi from "../api/categoriesApi";

const useCategories = ({id = null, name = null } = {}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (id) {
                    response = await categoriesApi.getById(id);
                } 
                else if (name) {
                    response = await categoriesApi.getByName(name);
                } else {
                    response = await categoriesApi.getAll();
                }
                setCategories(response || []);
            } catch (error) {
                console.error('Failed to fetch product list: ', error);
                setCategories([]);
            }
        };

        fetchData();
    }, [id, name]);

    return { categories };
};

export default useCategories;
