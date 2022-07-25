import { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import axios from "axios";
import { IconGoogle, IconFacebook, IconLogo } from "../../../utils/svg";
const Login = () => {
  const [nameInput, setNameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  // const handleClick = () => {
  //   document.getElementById("id01").style.display = "block";
  // };
  function onSubmit() {
    console.log("name:" + nameInput);
    const myAxios = axios;
    myAxios({
      method: "post", // defaut is get
      url: "http://localhost:8080/account/login",
      responseType: "json",
      data: {
        // data instead params when method isn't get
        email: nameInput,
        password: passInput,
      },
    })
      .then((res) => {
        if (res.data == null) {
          console.log("null");
        } else {
          console.log(res.data);
          
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
    
      <div className="w-1/5 bg-white h-3/5 p-10 rounded-lg drop-shadow-lg">
        <Form onSubmit={onSubmit} className="mt-7">
          <h4 className="centerLogin font-semibold text-2xl">Đăng nhập vào Trello</h4>
          <Form.Group className="mt-10" controlId="formBasicEmail">
            <Form.Control
              className="h-12"
              type="email"
              placeholder="Nhập email"
              value={nameInput}
              onInput={(e) => setNameInput(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mt-4" controlId="formBasicPassword">
            <Form.Control
              className="h-12"
              type="password"
              placeholder="Nhập mật khẩu"
              value={passInput}
              onInput={(e) => setPassInput(e.target.value)}
              required
            />
          </Form.Group>

          <button
            className="w-full bg-[#0052CC] mt-4 h-12 rounded-md text-white"
            type="submit"
          >
            Đăng nhập
          </button>
          <div className="span">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Nếu chưa là thành viên, mời bạn <a href="#">đăng ký tài khoản</a>
              </Form.Label>
            </Form.Group>
          </div>

          <div className="w-full">
            <div style={{boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0px"}} className="hover:cursor-pointer rounded-sm w-full flex flex-row items-center bg-white p-2">
              <span className="w-8 h-8"><IconGoogle /></span>
              <span className="pl-5">Đăng nhập với Google</span>
            </div>

            <div style={{boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0px"}} className="hover:cursor-pointer rounded-sm w-full flex flex-row items-center bg-white p-2 mt-3">
              <span className="w-8 h-8"><IconFacebook /></span>
              <span className="pl-5">Đăng nhập với Facebook</span>
            </div>

          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
