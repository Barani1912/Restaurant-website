import React from 'react';
import './SignUp.css';

function SignUpPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="signup-links">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
