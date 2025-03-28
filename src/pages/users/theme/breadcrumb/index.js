import { memo } from "react";
import "./style.scss"
import { Link, useSearchParams } from "react-router-dom";
import { ROUTERS } from "utils/router";

const Breadcrumb = (props) => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <div className="breadcrum">
            <div className="breadcrum_text">
                <h2>CHiCO SHOP</h2>
                <div className="breadcrum_option">
                    <ul>
                        <li className="link">
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>
                        {category ? `${category}` : props.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo( Breadcrumb );