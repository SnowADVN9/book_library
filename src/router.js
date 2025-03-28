import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ADMIN_PATH, ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductsPage from "pages/users/productsPage";
import ProductDetailPage from "pages/users/productDetailPage";
import LoginAdPage from "pages/admin/loginPage";
import ProductsManagerPageAdmin from "pages/admin/productsManagerPage";
import MasterAdLayout from "pages/admin/theme/masterAdLayout";
import AddProductPage from "pages/admin/addProductPage";
import UpdateProductPage from "pages/admin/updateProductPage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <ProductsPage />
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductDetailPage />
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) =>(
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
}

const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginAdPage />
        },
        {
            path: ROUTERS.ADMIN.MANAGER,
            component: <ProductsManagerPageAdmin />
        },
        {
            path: ROUTERS.ADMIN.LOGOUT,
            component: <ProductsManagerPageAdmin />
        },
        {
            path: ROUTERS.ADMIN.ADDNEW,
            component: <AddProductPage />
        },        
        {
            path: ROUTERS.ADMIN.EDIT,
            component: <UpdateProductPage />
        },        
    ]

    return (
        <MasterAdLayout>
            <Routes>
                {adminRouters.map((item, key) =>(
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterAdLayout>
    )
}

const RouterCustom = () => {
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(`/${ADMIN_PATH}`);
    return isAdminRouters ? renderAdminRouter() : renderUserRouter();
};

export default RouterCustom; 