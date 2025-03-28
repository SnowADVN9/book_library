import { memo } from "react";
import "./style.scss";
import { formatter } from "utils/fomater";
import useBooks from "hooks/useBooks";
import { generatePath, Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
import bookApi from "api/bookApi";

const ProductsManagerPageAdmin = () => {
    const { books } = useBooks();
    const handleDelete = (id) => {
        const confim = window.confirm("Bạn có muốn xóa sản phẩm này không?");
        if (confim) {
            bookApi.deleteBook(id);
        }
    }

    return (
        <div className="container">
            <div className="manager">
                <h2>Quản lý sản phẩm</h2>
                <div className="add_new">
                    <Link to={ROUTERS.ADMIN.ADDNEW}>Thêm sản phẩm</Link>
                </div>
                <div className="manager_content">
                    <table className="manager_table">
                        <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Thể loại</th>
                                <th>Giá</th>
                                <th>Số lượng còn lại</th>
                                <th>Đã bán</th>
                                <th>Hành động</th>
                            </tr>
                        
                        </thead>
                        <tbody>
                            {books.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <span>{item.id}</span>
                                    </td>
                                    <td className="td_left">
                                        <span>{item.name}</span>
                                    </td>
                                    <td>
                                        <span>{item.category}</span>
                                    </td>
                                    <td>
                                        <span>{formatter(item.price)}</span>
                                    </td>
                                    <td>
                                        <span>{item.quantity}</span>
                                    </td>
                                    <td>
                                        <span>{item.sold}</span>
                                    </td>
                                    <td>
                                        <Link to={generatePath(ROUTERS.ADMIN.EDIT, { id: item.id })} className="edit_button">Sửa</Link>
                                        <button className="delete_button" onClick={e => handleDelete(item.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>    
                    </table>
                </div>

                <div className="manager_footer">
                    <div className="manager_patination">
                        <div className="manager_page-number">
                            <button className="manager_page-btn">Trước</button>
                            <button className="manager_page-btn manager_page-btn--active">1</button>
                            <button className="manager_page-btn">2</button>
                            <button className="manager_page-btn">3</button>
                            <button className="manager_page-btn">4</button>
                            <button className="manager_page-btn">5</button>
                            <button className="manager_page-btn">Sau</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};

export default memo( ProductsManagerPageAdmin );