import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios, { AxiosResponse } from 'axios';
import logo from '../assets/logo-transparent-grey.png';

type LoginResponse = { token: string };

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data }: AxiosResponse<LoginResponse> = await axios.post(
        'http://10.1.1.196:4000/api/login',
        { username, password }
      );

      localStorage.setItem('token', data.token);
      navigate('/termeles');
    } catch (error) {
      console.error('❌ Login failed:', error);
      alert('Login failed. Check username/password.');
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        background:
          'linear-gradient(to right, rgba(245,141,72,1), rgba(52,152,217,1))',
      }}
    >
      {/* shift everything up slightly */}
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
              Please enter your username and password
            </p>

            <MDBInput
              contrast
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="Username"
              id="username"
              type="text"
              size="lg"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />

            <MDBInput
              contrast
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="Password"
              id="password"
              type="password"
              size="lg"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <MDBBtn
              outline
              className="px-5"
              color="white"
              size="lg"
              onClick={handleLogin}
            >
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
