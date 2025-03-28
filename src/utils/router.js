export const ADMIN_PATH = "quan-tri/";

export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "tai-khoan",
        PRODUCTS: "/san-pham",
        PRODUCT: "/san-pham/chi-tiet/:id",
    },

    ADMIN: {
        LOGIN: `/${ADMIN_PATH}dang-nhap`,
        MANAGER: `/${ADMIN_PATH}quan-ly-san-pham`,
        LOGOUT: `/${ADMIN_PATH}dang-xuat`,
        ADDNEW: `/${ADMIN_PATH}them-san-pham`,
        EDIT: `/${ADMIN_PATH}sua/:id`,
    } 
}