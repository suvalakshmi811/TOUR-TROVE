import React, { useState } from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import RegisterImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {

  const handleChange = e => {
    setCredentials(prev =>({ ...prev, [e.target.id]: e.target.value }));
}; 

const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
});

const navigate = useNavigate();


const handleclick = async e => {
  e.preventDefault();
};



  return (
    <section>
      <Container>
          <Row>
              <Col lg="8" className="m-auto">
                  <div className="login__container d-flex justify-content-between">
                      <div className="login__img">
                          <img src={RegisterImg} alt="" />
                       </div>
  
                       <div className="login__form">
                          <div className="user">
                            <img src={userIcon} alt="" />
                          </div>
                          <h2>Register</h2>
  
                          <Form onSubmit={handleclick}>
                              <FormGroup>
                                  <input 
                                  type="text" 
                                  placeholder="Username" 
                                  required 
                                  id="username" 
                                  onChange={handleChange} 
                                  />
                              </FormGroup>
                              <FormGroup>
                                  <input 
                                  type="email" 
                                  placeholder="Email" 
                                  required 
                                  id="email" 
                                  onChange={handleChange}
                                   />
                              </FormGroup>
                              <Button className="btn secondary__btn auth__btn"
                              type="submit">Login</Button>
                          </Form>
                          <p>Don't have an account? <Link to="/register">Create</Link></p>
                       </div>
                  </div>
              </Col>
          </Row>
      </Container>
    </section>
    );
    };
  
export default Register;