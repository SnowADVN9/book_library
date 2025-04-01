export const ADMIN_PATH = "quan-tri/";

export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "tai-khoan",
        PRODUCTS: "/san-pham",
        PRODUCT: "/san-pham/chi-tiet/:id",
        LOGIN: "/dang-nhap",
        SIGNUP: "/dang-ky-tai-khoan",
    },

    ADMIN: {
        LOGIN: `/${ADMIN_PATH}dang-nhap`,
        MANAGERPRODUCT: `/${ADMIN_PATH}quan-ly-san-pham`,
        MANAGERCATEGORIES: `/${ADMIN_PATH}quan-ly-danh-muc`,
        ADDNEWCATEGORY : `/${ADMIN_PATH}them-danh-muc`,
        EDITCATEGORY: `/${ADMIN_PATH}sua-danh-muc/:id`,
        LOGOUT: `/${ADMIN_PATH}dang-xuat`,
        ADDNEWPRODUCT: `/${ADMIN_PATH}them-san-pham`,
        EDITPRODUCT: `/${ADMIN_PATH}sua-san-pham/:id`,
    } 
}