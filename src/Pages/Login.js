import React, { useState } from "react"
import history from "../history"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
const Login = () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === true) {
            if (email === auth.email && password === auth.password){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                localStorage.setItem("id", "tes");
                history.push("/news")
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Check Email Or Password',
                    text: 'Something went wrong!',
                })
            }
        }
    };
   
    return (
        <div className="login">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" onChange={changeEmail} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={changePassword} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className="btn btn-success btn-lg mr-3" block="true" size="xl" type="submit">
                              Login
                            </Button>
                            <Button className="btn btn-info btn-lg mr-3" block="true" size="xl" type="submit" href="/">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login