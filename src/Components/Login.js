import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';

const Login = () => {
  const history=useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""

  })
  const [data, setData] = useState([])

  const addData = (e) => {
    e.preventDefault();
    const getuserarray=localStorage.getItem("userdata");
     console.log(getuserarray)
    const { email, password } = inpval;

    if (email === "") {
      alert("Email is requireed");
    }
    else if (!email.includes("@")) {
      alert("Enter valid  email address");
    }
    else if (password === "") {
      alert("Password Field is reqiured");
    }
    else if (password.length < 5) {
      alert("Password should contain more than 5 charecters")

    } else {
      if(getuserarray && getuserarray.length){
        
        const userdata=JSON.parse(getuserarray);
        
        //console.log(userdata);
        
        const userlogin = userdata.filter((el,k)=>{
          return el.email === email && el.password===password

        });
        if(userlogin.length===0){
          alert("Invalid Details");
        }else{
          console.log("used logined successfully")
          history("/details")
          localStorage.setItem("Login data",JSON.stringify(userlogin))

        }
        // console.log(userlogin)

      }


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
              <h2 className='text-center col-lg-4'>LogIn</h2>

              <Form>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                  <Form.Control onChange={getdata} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} variant="primary" type="submit">
                  logIn
                </Button>
              </Form>



            </div>
            <Sign_img />
          </section>

        </div>

      </>
    )
  }

  export default Login;
