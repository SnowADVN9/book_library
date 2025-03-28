import { memo } from "react";
import { AiOutlineBook, AiOutlineLogout } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";

const HeaderAd = ({ children, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const navItems = [
        {
            path: ROUTERS.ADMIN.MANAGER,
            onclick: () => navigate(ROUTERS.ADMIN.MANAGER),
            label:"Sản phẩm",
            icon: <AiOutlineBook />
        },

        {
            path: ROUTERS.ADMIN.LOGOUT,
            onclick: () => navigate(ROUTERS.ADMIN.LOGOUT),
            label:"Đăng xuất",
            icon: <AiOutlineLogout />
        },
    ];

    return (
        <div className="admin_header container" {...props}>
            <nav className="admin_header_nav">
                {
                    navItems.map(( {path, onclick, label, icon}) =>(
                        <div key={path}
                            className= {`admin_header_nav-item ${
                                location.pathname.includes(path) 
                                    ? "admin_header_nav-item--active"
                                    :""
                            }`}
                            onclick={onclick}    
                        >
                            <span className="admin_header_nav-icon">{icon}</span>
                            <span>{label}</span>

                        </div>
                    ))
                }
            </nav>
        </div>
    );
};

export default memo( HeaderAd );