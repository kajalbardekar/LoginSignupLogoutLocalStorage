import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""

    })
    const [data, setData] = useState([])

    console.log(inpval);

    const addData = (e) => {
        e.preventDefault();
        // console.log(inpval)
        const { name, email, password, date } = inpval;
        if (name === "") {
            alert("Name is required");
        } else if (email === "") {
            alert("Email is requireed");

        } else if (!email.includes("@")) {
            alert("Enter valid  email address");
        } else if (date === "") {
            alert("Date is required");

        } else if (password.length < 5) {
            alert("Password should contain more than 5 charecters")

        } else {
            console.log("LoggedIn  successfully..")
            localStorage.setItem("userdata", JSON.stringify([...data, inpval]))
        }


    }

    const getdata = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }


    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left-data mt-3 p-3" style={{ width: "100%" }}>
                        <h2 className='text-center col-lg-4'>SignUp</h2>

                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getdata} name="date" type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control onChange={getdata} name="password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Alewady have an accout <span> <NavLink to="/login">LogIn</NavLink> </span></p>


                    </div>
                    <Sign_img />
                </section>

            </div>



        </>
    )
}

export default Home
