import { memo, useEffect, useState } from "react";
import "./style.scss"
import {
    AiOutlineFacebook,
    AiOutlineShoppingCart,
    AiOutlineTikTok,
    AiOutlineUser,
    AiOutlineMenu,
    AiOutlinePhone
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";
import useCategories from "hooks/useCategories";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategories, setShowCategoties] = useState(false);
    const[menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa hàng",
            path: ""
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Light novel",
                    path: ""
                },
                {
                    name: "Manga",
                    path: ""
                },
                {
                    name: "Văn phòng phẩm - Quà tặng",
                    path: ""
                }
            ]
        },
        {
            name: "Bài viết",
            path: ""
        },
        {
            name: "Liên hệ",
            path: ""
        }

    ]);

    const { categories } = useCategories();

    useEffect(() =>{
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setShowCategoties(isHome);
    }, [location])

    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>hello@gmail.com</li>
                                <li>Miễn phí ship từ {formatter(200000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <div >
                                <ul>
                                    <li>
                                        <Link to={""}>
                                            <AiOutlineFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={""}>
                                            <AiOutlineTikTok />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={""}>
                                            <AiOutlineUser />
                                        </Link>
                                    </li>
                                    <li onClick={() =>navigate(ROUTERS.ADMIN.LOGIN)}>
                                        <span>Đăng nhập</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>CHiCO BOOK</h1>    
                        </div>    
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active":""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {menu.child.map((childItem, childKey) => (
                                                        <li key={`${menuKey}-${childKey}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}

                                                </ul>
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>    
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className = "header_cart">
                            <div className="header-cart-price">
                                 <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setShowCategoties(!isShowCategories)}>
                            <AiOutlineMenu />
                            <span> Danh sách sản phẩm</span>
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`${ROUTERS.USER.PRODUCTS}?category=${category.name}`}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>       
                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì"></input>
                                    <button type="submit" className="site-btn">Tìm kiếm</button>
                                </form>
                            </div>
                            
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                    <AiOutlinePhone />
                                </div>

                                <div className="hero_search_phone_text">
                                    <p>0364.006.304</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div> 
                        </div>
                        {
                            isHome && (<div className="hero_banner"></div>)
                            
                        }
                        
                    </div>
                </div>
            </div>
        </>    
    )
}

export default memo( Header );