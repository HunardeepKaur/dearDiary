// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import image3 from '../assets/Logo.png';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleInputFocus = (e) => {
    e.target.classList.add('active');
  };

  const handleInputBlur = (e) => {
    if (e.target.value === '') {
      e.target.classList.remove('active');
    }
  };

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Backend not connected yet)');
  };

  return (
    <div className="login-css">
      <main className={isSignUpMode ? 'sign-up-mode' : ''}
      >
        <div className="box12">
          <div className="inner-box">
            <div className="forms-wrap">
              {/* Sign In Form */}
              <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">
                <div className="form-content">
                  <div className="logo">
                    <img src={image3} alt="Dear Diary" className="logo-image" />
                  </div>
                  <div className="heading">
                    <h3>Sign In</h3>
                    <h6>Not registered yet?</h6>
                    <button type="button" className="toggle" onClick={toggleMode}>
                      Sign up
                    </button>
                  </div>
                  <div className="actual-form">
                    <div className="input-wrap">
                      <input
                        type="email"
                        className="input-field"
                        autoComplete="off"
                        required
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label>Email</label>
                    </div>
                    <div className="input-wrap">
                      <input
                        type="password"
                        className="input-field"
                        autoComplete="off"
                        required
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label>Password</label>
                    </div>
                    <input type="submit" value="Sign In" className="sign-btn" />
                    <p className="text">
                      Forgot your password or login details?
                      <br />
                      <a href="/">Get help</a> signing in
                    </p>
                  </div>
                </div>
              </form>

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} autoComplete="off" className="sign-up-form">
                <div className="form-content">
                  <div className="logo">
                    <img src={image3} alt="Dear Diary" className="logo-image" />
                  </div>
                  <div className="heading">
                    <h2>Get Started</h2>
                    <h6>Already have an account?</h6>
                    <button type="button" className="toggle" onClick={toggleMode}>
                      Sign in
                    </button>
                  </div>
                  <div className="actual-form">
                    <div className="input-wrap">
                      <input
                        type="email"
                        className="input-field"
                        autoComplete="off"
                        required
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label>Email</label>
                    </div>
                    <div className="input-wrap">
                      <input
                        type="password"
                        minLength="6"
                        className="input-field"
                        autoComplete="off"
                        required
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label>Password</label>
                    </div>
                    <input type="submit" value="Sign Up" className="sign-btn" />
                    <p className="text">
                      By signing up, I agree to the
                      <a href="/"> Terms of Services</a> and
                      <a href="/"> Privacy Policy</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Carousel */}
            <div className="carousel">
              <div className="carousel-content">
                <img 
                  src={"https://i.pinimg.com/736x/20/6d/66/206d6631301dd443936fa25104bf1432.jpg"} 
                  alt="Self-care" 
                  className="carousel-image" 
                />
                {/* <div className="carousel-overlay">
                  <p>Your personal space for thoughts and reflections</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;