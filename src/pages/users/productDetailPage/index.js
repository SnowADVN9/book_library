import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";

import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineTikTok } from "react-icons/ai";
import { formatter } from "utils/fomater";
import { ProductCard } from "component";
import { featProducts } from "utils/common";
import useBooks from "hooks/useBooks";
import { useParams } from "react-router-dom";


const ProductDetailPage = () => {
    const { id } = useParams();
    const { books } = useBooks({ bookId: Number(id) });
    return (
        <>
            <Breadcrumb name = "Chi tiết sản phẩm"/>
            <div className="container">
                {books.map((products) => (
                    <div className="row product_detail" key={products.id}>
                        <div className="col-lg-3 product_detail_pic">
                            <img src={products.img} alt=""></img>
                        </div>
                        <div className="col-lg-9 product_detail_text">
                            <h2>{products.name}</h2>
                            <div className="seen-icon">
                                <AiOutlineEye /> 
                                {` 10 (lượt đã xem) `}
                            </div>
                            <h3>{formatter(products.price)}</h3>
                            <p>
                                {products.description}
                            </p>

                            <ul>
                                <li>
                                    <b>Số lượng: </b> <span>{products.quantity}</span>
                                </li>
                                <li>
                                    <b>Đã bán: </b> <span>{products.sold}</span>
                                </li>
                                <li>
                                    <b>Chia sẻ: </b> {" "}
                                    <span>
                                        <AiOutlineFacebook />
                                        <AiOutlineTikTok />
                                        <AiOutlineCopy />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>  
                ))}

                <div className="section-title">
                    <h2>Sản phẩm tương tự</h2>
                </div>

                <div className="row">
                    {featProducts.all.products.map((item, key) => (
                        <div className="col-lg-3" key={key}>
                            <ProductCard id={item.id} img={item.img} name={item.name} price={item.price} />
                        </div>
                    ))}

                    
                </div>
            </div>
        </>
    );
}

export default memo( ProductDetailPage );