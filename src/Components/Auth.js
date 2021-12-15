import React, { useState, useEffect, useRef } from "react";
import "./Auth.css";
import illustrator from "./images/Group.png";
import logo from "./images/logo.png";
import mailIcon from "./images/icon.png";
import viewIcon from "./images/view.png";
import lockIcon from "./images/lock.png";
import googleIcon from "./images/Google.png";
import gitlabIcon from "./images/gitlab.png";

function Auth() {
  const [signUp, setSignUp] = useState(true);
const [username, setUserName]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')

  let regRef = useRef();
  let submitRef= useRef();
  useEffect(() => {


    function changeState() {
      if (signUp == true) {
        setSignUp(false);
      } else setSignUp(true);
    }
    regRef.current.addEventListener("click", changeState);


    function authenticate(e){
e.preventDefault()
    if (!signUp){
if (email && password){
  console.log(email, password)
}
    } 
    else{
      if (email && password && username){
        alert(email, password, username)
      }

    } 
    }

    submitRef.current.addEventListener('click', authenticate)
  }, [signUp, email,password, username]);



  return (
    <div className="auth">
      <div className="auth__Image">
        <div className="auth__Images">
          <img src={illustrator} salt="auth illustration" />
        </div>
        <p> Welcome Aboard </p>
      </div>

      <div className="auth__Content">
        <h2> {signUp ? `Sign Up` : `Sign In`}</h2>
        <form className="auth__Form" >
          <div className="auth__Input">
            <div className="auth__Name">
              <img src={mailIcon} />
              <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="auth__Password">
            <div className="auth__Name">
              <img src={lockIcon} />
              <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <img src={viewIcon} />
          </div>
          {signUp && (
            <>
              <div className="auth__Input">
                <div className="auth__Name">
                  <img src={mailIcon} />
                  <input type="text" placeholder="FullName" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
              </div>
            </>
          )}

          {!signUp && (
            <p className="auth__ForgotPassword"> Forgot password? </p>
          )}
          <input
            type="submit"
            value={!signUp ? `Log in` : `sign up`}
            className="auth__Submit"
            ref={submitRef}
          />
        </form>

        {!signUp && (
          <>
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
          </>
        )}

        <p className="auth__NoAccount">
          {" "}
          {signUp ? `Have no account yet?` : `Login`}
        </p>

        <button className="auth__Sign neumorph" ref={regRef}>
          {" "}
          {signUp ? `Registration` : `Login`}
        </button>
      </div>
    </div>
  );
}

export default Auth;
