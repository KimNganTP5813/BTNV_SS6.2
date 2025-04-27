import React from "react";
import userList from "./userList";
import userForm from "./userForm";
import modalBlock from "./modalBlock";
import modalDelete from "./modalDelete";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
} from "antd";


export default function usersManager() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null); //id quản lý trạng thái của sửa, xóa..
  const [form] = Form.useForm();
  
   //Hàm mở modal thêm mới
  const handleShowModal = () => {
    setShowModal(true);
  };

  //Hàm đóng modal thêm mới
  const handleCloseModal = () => {
    setShowModal(false);
    //Cập nhật lại id
    setId(null);
  };
  
  return (
<>
  <div className="w-[80%] m-auto mt-4 h-[100vh]">
    <main className="main">
      <header className="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <Button onClick={handleShowModal} className="btn btn-primary">Thêm mới nhân viên</Button>
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
{/*   <userForm/> */}
  <div className="overlay" h="">
    <Form form={form} 
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Chỉnh sửa nhân viên</h4>
        <i onClick={handleCloseModal} className="fa-solid fa-xmark" />
      </div>
      <div>
        <label className="form-label" htmlFor="userName">
          Họ và tên
        </label>
        <Form.Item>
            name="userName"
            rules={[
              { required: true, message: "Họ và tên không được để trống." },
            ]}
          >
        <Input id="userName" type="text" className="form-control" />
        {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
        </Form.Item>
      </div>
      <div>
        <label className="form-label" htmlFor="dateOfBirth">
          Ngày sinh
        </label>
        <Form.Item>
            name="dateOfBirth"
            rules={[
              { required: true, message: "Ngày sinh không được lớn hơn ngày hiện tại." },
            ]}
          >
        <Input id="dateOfBirth" type="date" className="form-control" />
        </Form.Item>
      </div>
      {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
      <div>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <Form.Item>
            name="email"
            rules={[
              { required: true, message: "Email không được để trống." },
            ]}
          >
        <Input id="email" type="email" className="form-control" />
         </Form.Item>
      </div>
      {/* <div class="form-text error">Email không được để trống.</div> */}
      <div>
        <label className="form-label" htmlFor="address">
          Địa chỉ
        </label>
        <textarea
          className="form-control"
          id="address"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div>
        <button type="submit" className="w-100 btn btn-primary">Thêm mới</button>
      </div>
    </Form>
  </div>
  {/* Modal xác nhận chặn tài khoản */}
  <modalBlock/>
  {/* Modal xác nhận xóa tài khoản */}
  <modalDelete/>
  </>
 );
}
   
