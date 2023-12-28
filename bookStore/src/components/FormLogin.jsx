import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function FormLogin() {
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
          <Form.Label>Tên đăng nhập</Form.Label>
          <InputGroup hasValidation>
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="text"
              placeholder="Nhập tài khoản"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập trường này.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" required />
          <Form.Control.Feedback type="invalid">
          Vui lòng nhập trường này.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Check
          label="Nhớ mật khẩu"
        />
        <Link className='float-end' to={'/quen-mat-khau'}>Quên mật khẩu</Link>
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button type="submit"  className='w-50 rounded-3 fw-medium'>Đăng nhập</Button>
      </div>
    </Form>
  );
}

export default FormLogin;