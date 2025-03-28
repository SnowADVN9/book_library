import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import useBooks from "hooks/useBooks";
import { ROUTERS } from "utils/router";
import "./style.scss";
import bookApi from "api/bookApi";

function AddProduct() {
    const navigate = useNavigate();
    const { books } = useBooks();

    

    const [data, setData] = useState({
        id: 0,
        name: "",
        img: "",
        quantity: 0,
        description: "",
        category: "",
        price: 0,
        sold: 0,
    });

    useEffect(() => {
        const getNextId = () => {
            if (books.length === 0) return "1";
            return String(Math.max(...books.map(book => Number(book.id))) + 1);
        };
        setData(prevData => ({ ...prevData, id: getNextId() }));
    }, [books]);

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
            await bookApi.addBook(data);
            navigate(ROUTERS.ADMIN.MANAGER);
        } catch (err) {
            console.error("Failed to add book: ", err);
        }
    };

    return (
        <div className="addnew">
            <div className="addnew_container">
                <h2 className="addnew_title">Add Product</h2>  
                <form className="addnew_form" onSubmit={handleSubmit}>
                    <div className="addnew_form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" id="name" value={data.name} onChange={handleChange} />
                    </div>
                    <div className="addnew_form-group">
                        <label htmlFor="img">Image</label>
                        <input type="text" id="img" value={data.img} onChange={handleChange} />
                    </div>
                    <div className="addnew_form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" min="0" value={data.quantity} onChange={handleChange} />
                    </div>
                    <div className="addnew_form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={data.description} onChange={handleChange} />
                    </div>
                    <div className="addnew_form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" value={data.category} onChange={handleChange} />
                    </div>
                    <div className="addnew_form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" min="0" value={data.price} onChange={handleChange} />
                    </div>
                    <button type="submit" className="addnew_button">Add</button>
                </form>
            </div>
        </div>
    );
}

export default memo(AddProduct);
