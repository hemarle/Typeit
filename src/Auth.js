import React from "react";
import "./Auth.css";
import illustrator from './images/Group.png'
import logo from './images/logo.png'
import mailIcon from './images/icon.png'
import viewIcon from './images/view.png'
import lockIcon from './images/lock.png'
import googleIcon from './images/Google.png'
import gitlabIcon from './images/gitlab.png'
function Auth() {
  return (
    <div className="auth">
      <div className="auth__Image">
      
      <div className="auth__Images">

          <img src={illustrator} salt="auth illustration" />
      </div>
        <p> Welcome Aboard </p>
      </div>

      <div className="auth__Content">
        <h2> Sign Up</h2>
        <form className='auth__Form' onSubmit={()=>alert('submit')}> 
          <div className="auth__Input">
            <div className="auth__Name">
              <img src={mailIcon} />
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="auth__Password">
            <div className="auth__Name">
              <img src={lockIcon} />
              <input type="password" placeholder="Password" />
            </div>
              <img src={viewIcon}/></div>
          
          <p className='auth__ForgotPassword'> Forgot password? </p>
          <input type="submit" value='Log in' className='auth__Submit'/>
        </form>

        <div className="auth__Or">
          <p>Or</p>
        </div>

        <div className="auth__Others">
          <button className="auth__Other neumorph">
            <img src={googleIcon} alt="google icon" />
            <p> Google</p>
          </button>
          <button className="auth__Other neumorph">
            <img src={gitlabIcon} alt="facebook icon" />
            <p> Google</p>
          </button>
        </div>

        <p className='auth__NoAccount'> Have no account yet?</p>
      
      <button className='auth__Sign neumorph'> Registration</button>
      </div>
    </div>
  );
}

export default Auth;
