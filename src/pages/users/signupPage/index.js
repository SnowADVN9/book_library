import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import userApi from "api/userApi";

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm_password");

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    try {
        const userData = { name,email, password };
        await userApi.register(userData);
        navigate(ROUTERS.USER.LOGIN);
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
    }
  };

  return (
    <div className="signup">
        <div className="signup_container">
            <h2 className="signup_title">Đăng ký tài khoản</h2>
            <form className="signup_form" onSubmit={handleSubmit}>
            <div className="signup_form-group">
                    <label htmlFor="name" className="signup_lable">Họ và tên</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="signup_form-group">
                    <label htmlFor="email" className="signup_lable">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="signup_form-group">
                    <label htmlFor="password" className="signup_lable">Mật khẩu</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="signup_form-group">
                    <label htmlFor="confirm_password" className="signup_lable">Xác nhận mật khẩu</label>
                    <input type="password" id="confirm_password" name="confirm_password" required />
                </div>
                <button type="submit" className="signup_button">Đăng ký</button>
                <button type="button" className="signup_button" onClick={() => navigate(ROUTERS.USER.LOGIN)}>Đăng nhập</button>
            </form>
        </div>
    </div>
  );
};

export default memo(SignupPage);
