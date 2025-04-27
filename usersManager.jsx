import React from "react";
import userList from "./userList";
import userForm from "./userForm";
import modalBlock from "./modalBlock";
import modalDelete from "./modalDelete";


export default function usersManager() {
  return (
<>
  <div className="w-[80%] m-auto mt-4 h-[100vh]">
    <main className="main">
      <header className="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button className="btn btn-primary">Thêm mới nhân viên</button>
      </header>
      <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style={{ width: 350 }}
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <i className="fa-solid fa-arrows-rotate" title="Refresh" />
      </div>
      {/* Danh sách nhân viên */}
      <userList/>
      <footer className="d-flex justify-content-end align-items-center gap-3">
        <select className="form-select">
          <option selected="">Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </footer>
    </main>
  </div>
  {/* Form thêm mới nhân viên */}
  <userForm/>
  {/* Modal xác nhận chặn tài khoản */}
  <modalBlock/>
  {/* Modal xác nhận xóa tài khoản */}
  <modalDelete/>
  </>
 );
}
   
