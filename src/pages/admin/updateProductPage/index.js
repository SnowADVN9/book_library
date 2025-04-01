import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBooks from "hooks/useBooks";
import { ROUTERS } from "utils/router";
import "./style.scss";
import bookApi from "api/bookApi";

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { books } = useBooks({ bookId: id });

    const [data, setData] = useState({
        name: "",
        img: "",
        quantity: 0,
        description: "",
        category: "",
        price: 0,
    });

    useEffect(() => {
        if (books.length > 0) {
            setData(books[0]);
        }
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
            await bookApi.updateBook(id, data);
            navigate(ROUTERS.ADMIN.MANAGERPRODUCT);
        } catch (err) {
            console.error("Failed to update book: ", err);
        }
    };

    return (
        <div className="update">
            <div className="update_container">
                <h2 className="update_title">Edit Product</h2>  
                <form className="update_form" onSubmit={handleSubmit}>
                    <div className="update_form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" id="name" value={data.name} onChange={handleChange} />
                    </div>
                    <div className="update_form-group">
                        <label htmlFor="img">Image</label>
                        <input type="text" id="img" value={data.img} onChange={handleChange} />
                    </div>
                    <div className="update_form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" min="0" value={data.quantity} onChange={handleChange} />
                    </div>
                    <div className="update_form-group">
                        <label htmlFor="description">Description</label>
                        <textarea rows="5" cols="50" id="description" value={data.description} onChange={handleChange} />
                    </div>
                    <div className="update_form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" value={data.category} onChange={handleChange} />
                    </div>
                    <div className="update_form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" min="0" value={data.price} onChange={handleChange} />
                    </div>
                    <button type="submit" className="update_button">Update</button>
                </form>
            </div>
        </div>
    );
}

export default memo(UpdateProduct);
