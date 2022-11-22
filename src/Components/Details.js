import React, { useState } from 'react'
import { useEffect } from 'react'
import { ToastBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const Details = () => {
  const [loginData, setLogindata] = useState([]);
  const [show, setShow] = useState(false);
  const history=useNavigate()
;

  console.log(loginData);
  var todayDate = new Date().toISOString().slice(0.10);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const birthday = () => {
    const getuser = localStorage.getItem("Login data")
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)
      setLogindata(user)
      //console.log(user)
      const userbirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });
      if (userbirth) {
        setTimeout(() => {
          console.log("settimeout")
          handleShow();
        }, 3000);
      }
    }
    //console.log(getuser)
    console.log("Birthday");

  }
  const userLogout=()=>{
    localStorage.removeItem("Login data")
    history("/");

}  
useEffect(() => {
    birthday();
  }, [])
  return (
    <>
      {
        loginData.length === 0 ? "error" :
          <>
            <h1>Details Page</h1>
            <h1>{loginData[0].name}</h1>
   <button onClick={userLogout}>Logout</button>


            {
              loginData[0].date === todayDate ?
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{loginData[0].name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Happy Birthday</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>: ""
            }






          </>

      }

    </>
  )
}

export default Details
