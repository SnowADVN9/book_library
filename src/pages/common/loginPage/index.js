import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import userApi from "api/userApi";

const LoginUserPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const userData = { email, password };
      const response = await userApi.login(userData); // Giả sử API trả về một đối tượng chứa thông tin tài khoản

      // Lưu token và loại tài khoản vào localStorage
      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("type", response.type); // Lưu loại tài khoản (user/admin)


      // Chuyển hướng đến trang phù hợp dựa trên loại tài khoản
      if (response.type === "admin") {
        navigate(ROUTERS.ADMIN.MANAGERPRODUCT); // Nếu là admin, chuyển hướng đến trang quản lý
      } else {
        navigate(ROUTERS.USER.HOME); // Nếu là user, chuyển hướng đến trang chính
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        <h2 className="login_title">Đăng nhập tài khoản</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="login_form-group">
            <label htmlFor="email" className="login_lable">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="login_form-group">
            <label htmlFor="password" className="login_lable">Mật khẩu</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login_button">Đăng nhập</button>
          <button type="button" className="login_button" onClick={() => navigate(ROUTERS.USER.SIGNUP)}>Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginUserPage);
