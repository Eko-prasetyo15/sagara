import React, { useEffect, useState } from "react"
import history from '../history'
import { Button, Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProvinsi } from "../Redux/Action";

const Home = () => {
    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [jkelamin, setJkelamin] = useState("")
    const [password, setPassword] = useState("");
    const [provinsi, setProvinsi] = useState("")
    const [kota, setKota] = useState("")
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        dispatch(getProvinsi(provinsi))
    }, [dispatch, provinsi])

    const provState = useSelector((state) => state.Country.datasProv)
    const cityState = useSelector((state) => state.Country.datasKota)

    const changeFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const changeLastname = (e) => {
        setLastname(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeKelamin = (e) => {
        setJkelamin(e.target.value)
    }
    const changeProv = (e) => {
        console.log(e.target.value)
        setProvinsi(e.target.value)
    }
    const changeKota = (e) => {
        console.log(e.target.value)
        setKota(e.target.value)
    }
    const handleSubmit = (event) => {
        const logAuth = {
            email: email,
            password: password
        }
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if(form.checkValidity() === true){
            window.localStorage.setItem("auth", JSON.stringify(logAuth));
            history.push("/login")
        }
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12">
                    <h1 className="text-center mb-3">Registration</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" onChange={changeFirstname} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a First Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Lastname" onChange={changeLastname} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Last Name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Username" onChange={changeEmail} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Corect Email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={changePassword} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Corect Password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Control required as="select" type="select" aria-label="Default select example" onChange={changeKelamin} >
                                <option value="">-Pilih-</option>
                                <option value="laki-laki">Laki-Laki</option>
                                <option value="perempuan">Perempuan</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a Gender
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Provinsi</Form.Label>
                            <Form.Control required as="select" type="select" aria-label="Default select example" onChange={changeProv}>
                                <option value="">-Pilih-</option>
                                {provState.map((prov, idx) => {
                                    return (
                                        <option value={prov.id} key={prov.id}>{prov.nama}</option>
                                    )
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid province.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Kota</Form.Label>
                            <Form.Control required as="select" type="select" aria-label="Default select example" onChange={changeKota}>
                                <option value="">-Pilih-</option>
                                {cityState && cityState.map((city, idx) => {
                                    return (
                                        <option value={city.id}>{city.nama}</option>
                                    )
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div style={{ textAlign: 'right' }}>
                            <Button className="btn btn-info btn-lg mr-3" size="xl" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Home