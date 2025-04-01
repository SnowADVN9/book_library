import { memo } from "react";
import Header from "../header";
import Footer from "../../../common/footer";
import { useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";

const MasterLayout = ({ children, ...props }) => {
    const location = useLocation();
    const isLoginPage = [ROUTERS.USER.LOGIN, ROUTERS.USER.SIGNUP].some(path => location.pathname.startsWith(path));

    return (
        <div {...props}>
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default memo( MasterLayout );