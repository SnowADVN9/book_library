import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { ProductCard } from "component";
import useBooks from "hooks/useBooks";
import useCategories from "hooks/useCategories";


const ProductsPage = () => {
    const sort = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới nhất",
        "Cũ nhất",
        "Bán chạy nhất",
        "Đang giảm giá"
    ];
    
    const { categories } = useCategories();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || "Manga";

    const { books } = useBooks({ category });

    return (
        <>
            <Breadcrumb name = "Danh sách sản phẩm"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <div className="sidebar_item">
                                <h2>Tìm kiếm</h2>
                                <input type="text" ></input>
                            </div>
                            <div className="sidebar_item">
                                <h2>Mức giá</h2>
                                <div className="price_range-wrap">
                                    <div>
                                        <p>Từ: </p>
                                        <input type="number" min={0}></input>
                                    </div>
                                    <div>
                                        <p>Đến</p>
                                        <input type="number" min={0}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                    {sort.map((item, key)=>(
                                        <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                                            {item}
                                        </div>
                                    ))} 
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Thể loại khác</h2>
                                <ul>
                                    {categories.map((category)=>(
                                        <li key={category.id}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>{category.name}</Link>
                                        </li>
                                    ))} 
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            {books.map((products) => (
                                <div className="col-lg-4" key={products.id}>
                                    <ProductCard id={products.id} name={products.name} img={products.img} price={products.price} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo( ProductsPage );