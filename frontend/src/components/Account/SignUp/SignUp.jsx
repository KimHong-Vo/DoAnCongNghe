import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.scss';
import { FormGroup } from 'react-bootstrap';

const SignUp = () => {

  return (
    <div className='SignUp'>
      <Form>
        <h4 className='centerLogin'>Đăng ký cho tài khoản của bạn</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
          <Form.Text className="text-muted">
            Bằng cách đăng kí, bạn xác nhận bạn đã đọc và chấp nhận Điều khoản dịch vụ và Chính sách riêng tư của chúng tôi.
          </Form.Text>
        </Form.Group>
          <Button disabled={true} variant="primary" type="submit">
            Tiếp tục
          </Button>
      </Form>
      <div className='span'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bạn đã có tài khoản? <a href=''>Đăng nhập</a>.</Form.Label>
        </Form.Group>
      </div>
    </div>
  )
}

export default SignUp