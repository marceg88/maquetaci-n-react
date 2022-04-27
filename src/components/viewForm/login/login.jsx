import { Form, Button } from "react-bootstrap"
import {useState} from "react"
function SignIn(){

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
    <Form onSubmit={handleSubmit}>
      <Form.Group>
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
      <Form.Group>
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
      <Button type="submit">Login</Button>
    </Form>  
  )
}

export default SignIn