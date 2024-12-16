// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

// import { Container, Heading, Button } from 'renderer/components'
// import { useWindowStore } from 'renderer/store'

// // The "App" comes from the context bridge in preload/index.ts
// const { App } = window

// export function MainScreen() {
//   const navigate = useNavigate()
//   const store = useWindowStore().about

//   // useEffect(() => {
//   //   App.sayHelloFromBridge()

//   //   App.whenAboutWindowClose(({ message }) => {
//   //     console.log(message)

//   //     store.setAboutWindowState(false)
//   //   })
//   // }, [])

//   // function openAboutWindow() {
//   //   App.createAboutWindow()
//   //   store.setAboutWindowState(true)
//   // }

//   return (
//     <Container>
//       <Heading>Hi, {App.username || 'there'}! 👋</Heading>

//       <h2>It's time to build something awesome! ✨</h2>

//       <nav>
//         <Button
//           className={store.isOpen ? 'disabled' : ''}
//           // onClick={openAboutWindow}
//         >
//           Open About Window
//         </Button>

//         <Button onClick={() => navigate('anotherScreen')}>
//           Go to Another screen
//         </Button>
//       </nav>
//     </Container>
//   )
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loadingimage from '../../assets/Images/play-icon.png';
import logo from '../../assets/Images/Ms-logo.png';
// import bcrypt from 'bcryptjs';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
// import { Stores, addData, getStoreData, initDB } from '../../dbconfig/Offlinedb';
import { Button, Modal } from "react-bootstrap";
import { errorMessageNodify } from '../../alertMessages/alertMessage';
import InputWithClear from '../../components/inputbax';

interface LoginValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export function Login()  {
  const navigate = useNavigate();
  const [loader, setLoading] = useState(false);

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
      try {
        setLoading(true);
        // const hashedPassword = await bcrypt.hash(values.password, 10);
        const userData = {
          id: '1',
          email: values.email,
          password: values.password,
        };

        // const users = await getStoreData(Stores.Users);

        // const user = users.find((user: { email: string }) => user.email === values.email);

  
          if (values.email === "13jul@mastercook.com") {
            // await addData(Stores.Users, userData);
            navigate('/dashboard');
          } else {
            setLoading(false);
            errorMessageNodify('Invalid email');
          }
        
      } catch (error) {
        setLoading(false);
        errorMessageNodify('An unexpected error occurred. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // useEffect(() => {
  //   initDB().then((result) => {
  //     if (result) {
  //       console.log('Database initialized successfully');
  //     } else {
  //       console.log('Failed to initialize database');
  //     }
  //   });
  // }, []);

  // const handleRegister = () => {
  //   navigate('/register');
  // };

  // const handleForget = () => {
  //   navigate('/forget');
  // };

  // const handleClearEmail = () => {
  //   formik.setFieldValue('email', '');
  // };

  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => {
    setShow(false);
    setShowSuccess(true);
  };

  // return (
  //   <div>
  //   Login
  //   </div>
  // );
  return (
    <div className="body">
      <div className="login-page">
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-6 col-xxl-6 sm-12 head">
                <div className="food-bg">
                  <div className="mc-box d-flex justify-content-center">
                    <img src={logo} alt="Ms-logo" />
                  </div>
                  <div className="video d-flex justify-content-center">
                    <div>
                      <p className="video-content" style={{ color: "#333333" }}>Watch getting started video</p>
                      <div className="video-play d-flex justify-content-center">
                        <img src={loadingimage} alt="play-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12 head">
                <div className="login-form">
                  <p className="account" style={{ textAlign: 'center' }}>
                    Don’t have an Account? <a href="https://www.mastercook.com/register" target="_blank">Register now</a>
                  </p>
                  <div>
                    <h2 className="Welcome" style={{ textAlign: 'center' }}>Welcome Back!</h2>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 flex flex-column text-center justify-content-center position-relative">
                        <input
                          type="email"
                          name="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error">{formik.errors.email}</div>
                        ) : null}
                      </div>

                      <div className="mb-3 mt-4 flex flex-column text-center justify-content-center">
                        <input
                          name="password"
                          type='password'
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="error">{formik.errors.password}</div>
                        ) : null}
                      </div>

                      <div className="d-flex justify-content-end forgot">
                        <p style={{ color: '#4F4F4F' }}><a onClick={handleShow}>Forgot Password? </a></p>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn submit-btn">
                          {loader ? <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div> : 'Login'}
                        </button>
                      </div>
                    </form>
                    <div className="master-cook-products d-flex justify-content-center pt-4">
                      <h3 className="ms-love">Love MasterCook?</h3>
                    </div>
                    <div className="d-flex justify-content-center" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                      <button type="button" className="btn pro"><a >Buy More Products</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <>

          {/* First Modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header >
           
            <Modal.Title></Modal.Title>
            <i 
              className="fa fa-times custom-close-icon" 
              onClick={handleClose} 
              style={{ cursor: 'pointer', marginLeft: 'auto' }}>
            </i>
           
            </Modal.Header>
            <Modal.Body>
              <div className='text-center modal-title'>
                <h3>Reset Your Password</h3>
                <p>Password reset link will be sent on<br />your registered email.</p>
              </div>
              <div className='croos-input-1'>
                <InputWithClear />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div className='cookbook-btn mt-2'>
                  <Button variant="primary" onClick={handleSuccessShow}>
                    Send Link
                  </Button>
                </div>
                <div className='text-center mt-3'>
                  <Link to='' className='need-help '>Need Help?</Link>
                </div>
              </div>
            </Modal.Footer>
          </Modal>

          {/* Second Success Modal */}
          <Modal show={showSuccess} onHide={handleSuccessClose} centered>
            <Modal.Header >
              <Modal.Title></Modal.Title>
              <i 
                className="fa fa-times custom-close-icon" 
                onClick={handleClose} 
                style={{ cursor: 'pointer', marginLeft: 'auto' }}>
              </i>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center ">
                <svg
                  width="45"
                  height="40"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="36" height="36" rx="18" fill="#60C26F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2203 22.0455L10.9531 17.692L9.5 19.1641L15.2203 25L27.5 12.472L26.0571 11L15.2203 22.0455Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
              <p className="recipe-added">
                Password reset link  <br />
                sent successfully.
              </p>
              <div className='cookbook-btn'>
                <Button variant="primary" onClick={handleSuccessClose}>
                  Check Email
                </Button>
              </div>

            </Modal.Body>
          </Modal>
        </>
      </div>
    </div>
  );
}


