import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from 'react-router-dom'
import "./Auth.css";
import firebase from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Cookies from "universal-cookie/es6";
import illustrator from "./images/Group.png";
import logo from "./images/logo.png";
import mailIcon from "./images/icon.png";
import viewIcon from "./images/view.png";
import lockIcon from "./images/lock.png";
import googleIcon from "./images/Google.png";
import gitlabIcon from "./images/gitlab.png";


function Auth() {
  //firebase
  const auth = getAuth();
//cookies
const cookies = new Cookies();

const navigate= useNavigate()

  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let regRef = useRef();
  let submitRef = useRef();
  useEffect(() => {
    function changeState() {
      if (signUp == true) {
        setSignUp(false);
      } else setSignUp(true);
    }
    regRef.current.addEventListener("click", changeState);

  }, [signUp]);

//Authentication
  function authenticate(e) {
    if (!signUp) {
      if (email && password) {
         signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 'user')
      cookies.set('user', user);
console.log(cookies.get('user')) 


navigate('/upload');
      // ...
    }).then(

    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorCode, errorMessage)
    });
      }
      else{
        console.log('error')
      }
    } else {
      if (email && password && username) {
        console.log(email, password, username)
        createUserWithEmailAndPassword(auth, email, password)
          .then((user) => {
            console.log(user, "user");
            setSignUp(false)
          })
          .catch((error) => alert(error.message));
      }
      else(console.log('empty'))
    }
    e.preventDefault()
  }
  
  // function authenticate(e){
  //   console.log(username, 'user')
  //   e.preventDefault()
  // }


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
        <form className="auth__Form" onSubmit={(e)=>{authenticate(e)}}>
          <div className="auth__Input">
            <div className="auth__Name">
              <img src={mailIcon} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onInputCapture={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        

          <div className="auth__Password">
            <div className="auth__Name">
              <img src={lockIcon} />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <img src={viewIcon} />
          </div>

      
          {signUp && 
             <> 
              <div className="auth__Input">
                <div className="auth__Name">
                  <img src={mailIcon} />
                  <input
                    type="text"
                    value={username}
                    placeholder="FullName"
                    onInputCapture={(f) => setUserName(f.currentTarget.value)}
                  />
                </div>
              </div>
            </>
            } 

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
