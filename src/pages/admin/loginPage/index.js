import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const LoginAdPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefaut();
        navigate(ROUTERS.ADMIN.MANAGERPRODUCT);
    }

    return (
        <div className="login">
            <div className="login_container">
                <h2 className="login_title">Đăng nhập vào hệ thống</h2>
                <form className="login_form" onSubmit={handleSubmit}>
                    <div className="login_form-group">
                        <label htmlFor="username" className="login_lable">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="login_form-group">
                        <label htmlFor="password" className="login_lable">Mật khẩu</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login_button">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
};

export default memo( LoginAdPage );