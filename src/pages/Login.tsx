import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

import logo from '../assets/logo-transparent-grey.png';

export default function Login() {
  return (
    <MDBContainer
      fluid
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        background:
          'linear-gradient(to right, rgba(245,141,72,1), rgba(52,152,217,1))',
      }}
    >
      {/*  ➜  NEW wrapper just to shift everything up a touch  */}
      <div
        className="d-flex flex-column align-items-center gap-4"
        style={{ transform: 'translateY(-6vh)' }}
      >
        <img src={logo} alt="Logo" style={{ width: 140 }} />

        <MDBCard
          className="bg-dark text-white"
          style={{ borderRadius: '1rem', maxWidth: 400, width: '100%' }}
        >
          <MDBCardBody className="p-5 d-flex flex-column align-items-center">
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-white-50 mb-5">
              Please enter your login and password!
            </p>

            <MDBInput
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="Username"
              id="username"
              type="text"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="Password"
              id="password"
              type="password"
              size="lg"
            />

            <MDBBtn outline className="px-5" color="white" size="lg">
              Login
            </MDBBtn>

            <MDBBtn
              tag="a"
              outline
              color="light"
              size="lg"
              href="/"
              className="mt-4 px-5"
            >
              Back to Main
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
}
