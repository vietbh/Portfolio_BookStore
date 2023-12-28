import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormRegister() {
  const [validated, setValidated] = useState(false);
    const [click,setClick] = useState(0);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setClick(click+1);
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Tên người dùng <span className='text-danger'>*</span></Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng không để trống trường này.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Nhập email "
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng không để trống trường này.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Mật khẩu <span className='text-danger'>*</span></Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Mời nhập mật khẩu "
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng không để trống trường này.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mời nhập lại mật khẩu" required />
          <Form.Control.Feedback type="invalid">
            Vui lòng không để trống trường này.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Đồng ý với chính sách và thỏa thuận"
          feedback="Bạn cần đồng ý thỏa thuận mới có thể đăng ký."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button type="submit"  className='w-50 rounded-3 fw-medium'>Đăng ký</Button>
      </div>
    </Form>
  );
}

export default FormRegister;