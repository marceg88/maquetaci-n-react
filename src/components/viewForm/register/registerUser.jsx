import { useRef, useState } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";


function SignUp() {
  
  const formulario = useRef(null);

  const [todo, setTodo] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(todo);
  };

  const handleChange = (e) => {
      // console.log(e.target.name);
      // console.log(e.target.value);
      // setTodo({ ...todo, [e.target.name]: e.target.value });
      setTodo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
      }));
  };
  return(
    <Form noValidate onSubmit={handleSubmit} ref={formulario}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Please, ingresa un nombre valido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name="password"
            type="password" 
            onChange={handleChange}
            placeholder="Password" 
            required 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomConfirmedPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name="confirmedPassword"
            type="password" 
            onChange={handleChange}
            placeholder="Comfirmed Password" 
            required 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default SignUp