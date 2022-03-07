import React, { useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userlogin } from '../redux/action'

const LoginPage = () => {
    const {user,loading}= useSelector(state=>state)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch()
    const HandelSubmit=(e)=>{
        e.preventDefault()
        dispatch(userlogin({email,password}))
    }
   
  return (
   
        <div className='signup'>
            { loading? <Spinner animation="border" /> :
             localStorage.getItem("token") ?  <Navigate to="/profil"/>
           :
            <Form className='form_SignUp'>
                <Form.Group as={Row} className="mb-3" controlId="Email">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Button variant="success" onClick={HandelSubmit}>Confirme</Button>
            </Form>
              }
        </div>
  )
}

export default LoginPage