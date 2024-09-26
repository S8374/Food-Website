import React, { useState, useEffect, useContext, useRef } from 'react';
import { sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';
import auth from '../Firebase/_firebase.config';

const LoginSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const emailRef = useRef(null);  // Reference for email input
  const {  logIn, signUp, logout } = useContext(AuthContext);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError('');
    setSuccessMessage('');

    try {
      const result = await logIn(email, password);
      if (result.user.emailVerified) {
        alert('Login Succsesfully')
        setSuccessMessage('Logged in successfully');
      } else {
        alert('Please verify your email');
        logout(); // Log out if the email is not verified
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

// Handle Forget Password
const handleForgetPassword = () => {
  const email = emailRef.current.value; // get the email from the input

  // Validate if email is provided
  if (!email) {
    alert('Please provide an email');
    return;
  }

  // Validate email format
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('Please write a valid email');
    return;
  }

  // Send password reset email
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Please check your email for the reset link');
    })
    .catch((error) => {
      alert(error.message);
    });
};

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    setRegisterError(''); // Clear previous error
    setSuccessMessage(''); // Clear previous success message

    try {
      const result = await signUp(email, password);

      // Send email verification and update profile if sign-up is successful
      await sendEmailVerification(result.user);
      alert('Please check your email for verification');

      await updateProfile(result.user, {
        displayName: name,
      });

      setSuccessMessage('Account created successfully');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setRegisterError('This email is already in use.');
        alert('This email is already used. Please log in.'); // Alert for email already in use
      } else {
        setRegisterError(error.message); // Other errors
      }
    }
  };

  useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      if (isSignUpMode) {
        container.classList.add('sign-up-mode');
      } else {
        container.classList.remove('sign-up-mode');
      }
    }
  }, [isSignUpMode]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input
              type="checkbox"
              className="toggle"
              onChange={() => setIsSignUpMode(!isSignUpMode)}
              checked={isSignUpMode}
            />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" onSubmit={handleLogin}>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    ref={emailRef} // Assign ref to this email input
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <Link onClick={handleForgetPassword}>Forget password</Link>
                  <button className="flip-card__btn" type="submit">Let's go!</button>
                </form>
                {loginError && <p className="error-message">{loginError}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </div>

              <div className="flip-card__back">
                <div className="title">Create New Account</div>
                <form className="flip-card__form" onSubmit={handleRegister}>
                  <input
                    className="flip-card__input"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <div>
                    <input type="checkbox" name="terms" required /> I accept the terms and conditions
                  </div>
                  <button className="flip-card__btn" type="submit">Confirm!</button>
                </form>
                {registerError && <p className="error-message">{registerError}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
