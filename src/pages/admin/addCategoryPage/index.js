import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";
import useCategories from "hooks/useCategories";
import categoriesApi from "api/categoriesApi";

function AddCategory() {
    const navigate = useNavigate();
    const { categories } = useCategories();

    

    const [data, setData] = useState({
        id: 0,
        name: ""
    });

    useEffect(() => {
        const getNextId = () => {
            if (categories.length === 0) return "1";
            return String(Math.max(...categories.map(category => Number(category.id))) + 1);
        };
        setData(prevData => ({ ...prevData, id: getNextId() }));
    }, [categories]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await categoriesApi.addCategory(data);
            navigate(ROUTERS.ADMIN.MANAGERCATEGORIES);
        } catch (err) {
            console.error("Failed to add category: ", err);
        }
    };

    return (
        <div className="addnew">
            <div className="addnew_container">
                <h2 className="addnew_title">Thêm danh mục</h2>  
                <form className="addnew_form" onSubmit={handleSubmit}>
                    <div className="addnew_form-group">
                        <label htmlFor="name">Tên danh mục</label>
                        <input type="text" id="name" value={data.name} onChange={handleChange} />
                    </div>
                    <button type="submit" className="addnew_button" >Thêm</button>
                </form>
            </div>
        </div>
    );
}

export default memo(AddCategory);
