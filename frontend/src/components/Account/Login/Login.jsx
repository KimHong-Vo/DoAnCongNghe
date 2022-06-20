import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [nameInput, setNameInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const handleClick = () => {
      document.getElementById('id01').style.display = 'block';
  }
  function onSubmit  () {
      const myAxios = axios;
      myAxios({
          method: 'post',  // defaut is get
          url: 'http://192.168.1.78:8080/login',
          responseType: 'json',
          data: {   // data instead params when method isn't get
            name: nameInput,
            password: passInput
          }
        
      }).then(res=>{
          
          if (res.data==null) {
              console.log('null');
          }
          else console.log(res.data);

      }).catch(error =>{console.log(error.data)});
  }
  return (
    <div className='Login'>
      <Form onSubmit={onSubmit}>
        <h4 className='centerLogin'>Đăng nhập vào Trello</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" value={nameInput} onInput={e =>setNameInput(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" value={passInput} onInput={e =>setPassInput(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <a  href=''>Quên mật khẩu</a>
        </Form.Group>
        <Button  variant="primary" type="submit" >
          Đăng nhập
        </Button>
        <div className='span'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nếu chưa là thành viên, mời bạn <a href=''>đăng ký tài khoản</a>.</Form.Label>
        </Form.Group>
        </div>
      </Form>
    </div>
  )
}

export default Login;