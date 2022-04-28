import { useEffect, useState } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, selectUserRegisterState, userRegister, resetUserMethodsMessage } from "../../../store/userSlice";

import "./registerUser.css"

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user = useSelector(selectUser)
  const { message, status } = useSelector(selectUserRegisterState)
  const [validated, setValidated] = useState(false);
  const [todo, setTodo] = useState({})
 
  const handleSubmit = (e) => {
      e.preventDefault()
      setValidated(true);
      console.log(todo)
      dispatch(userRegister(todo))
  }
  const handleChange = (e) => {
      setTodo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
      }))
  }
  useEffect(() => {
    if (status === 'Ok') {
      setTimeout(() => {
        navigate('/login');
        console.log("entra")
      }, 3500);
    }
  }, [dispatch, status, navigate])
  
  return(
    <div className="container-view">
      <div className="container-form-register">
        <div className="container-top">

        </div>
        <div className="container-direction">
        <h2>Fill in the fields to register.</h2>
        <Form noValidate onSubmit={handleSubmit} validated={validated} className="form-grid" >
          <div className="container-columns-form">
          <div className="form-left">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please, enter your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please, enter your last name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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
               Please, enter your userName.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="example@test.com"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
          </Form.Group>
          </div>
          <div className="form-right">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>What your age?</Form.Label>
              <Form.Control
                name="age"
                type="number"
                placeholder="Age"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>What your address?</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="address"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>What your contact?</Form.Label>
              <Form.Control
                name="contac"
                type="number"
                placeholder="contact"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
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
          </div>
          </div>
          
          
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="botton">
          <Button variant="secondary" type="submit" >Register</Button>
          <Link className="login" to="/login">  or signIn</Link>
        <p>{message}</p>
        </div>
        
        </Form>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default SignUp