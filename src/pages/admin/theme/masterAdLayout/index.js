import Footer from "pages/common/footer";
import HeaderAd from "../header"
import { memo } from "react";
import { useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";


const MasterAdLayout = ({ children, ...props }) => {
    const location = useLocation();
    const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);

    return (
        <div {...props}>
            {!isLoginPage && <HeaderAd />}
            {children}
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default memo( MasterAdLayout );