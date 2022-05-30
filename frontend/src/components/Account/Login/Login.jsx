import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';

const Login = () => {

  return (
    <div className='Login'>
      <Form>
        <h4 className='centerLogin'>Đăng nhập vào Trello</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <a  href=''>Quên mật khẩu</a>
        </Form.Group>
        <Button variant="primary" type="submit">
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

export default Login