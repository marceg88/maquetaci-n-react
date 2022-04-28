import { Form, Button } from "react-bootstrap"
import {useEffect, useState} from "react"

import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLoginState, userLogin } from "../../../store/userSlice";

function SignIn(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { message, status } = useSelector(selectUserLoginState)
  const [todo, setTodo] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(todo);
      const { userName, password } = todo
      dispatch(userLogin({ userName, password }))
  };
  const handleChange = (e) => {
      setTodo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
      }));
  };
  useEffect(() => {
    if (status === 'Ok') {
      setTimeout(() => {
        navigate('/profile');
      }, 3500);
    }
  }, [status, navigate]);

  return(
    <div className="container-view-login">
      <div className="container-form-login">
      <div className="container-top-login">

      </div>
      <div className="container-inf-user">
      <h2>Enter user data</h2>
      <div className="container-login">
      <Form onSubmit={handleSubmit} className="form-login">
        <Form.Group style={{margin: "20px"}}>
          <Form.Label>UserName</Form.Label>
          <Form.Control
            required
            name="userName"
            type="userName"
            placeholder="UserName ..."
            onChange={handleChange}
          />
          <Form.Control.Feedback>please ...</Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{margin: "20px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password ..."
            onChange={handleChange}
          />
          <Form.Control.Feedback>please ...</Form.Control.Feedback>
        </Form.Group>
        <div className="button">
          <Button variant="secondary" type="submit" style={{ width: "100px"}}>Login</Button>
          <Link className="login" to="/registro"> or register</Link>
          
        </div>
        <p>{message}</p>
      </Form>
      </div>
      </div>
      
      </div>
      
      
    </div>
      
  )
}

export default SignIn