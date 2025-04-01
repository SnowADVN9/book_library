import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";
import useCategories from "hooks/useCategories";
import categoriesApi from "api/categoriesApi";

function UpdateCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { categories } = useCategories({ id: id });

    const [data, setData] = useState({
        name: "",
    });

    useEffect(() => {
        if (categories.length > 0) {
            setData(categories[0]);
        }
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
            await categoriesApi.updateCategory(id, data);
            navigate(ROUTERS.ADMIN.MANAGERCATEGORIES);
        } catch (err) {
            console.error("Failed to update category: ", err);
        }
    };

    return (
        <div className="update">
            <div className="update_container">
                <h2 className="update_title">Sửa danh mục</h2>  
                <form className="update_form" onSubmit={handleSubmit}>
                    <div className="update_form-group">
                        <label htmlFor="name">Tên danh mục</label>
                        <input type="text" id="name" value={data.name} onChange={handleChange} />
                    </div>
                    <button type="submit" className="update_button">Update</button>
                </form>
            </div>
        </div>
    );
}

export default memo(UpdateCategory);
