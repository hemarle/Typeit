import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Auth.css";
import firebase, { db } from "./firebase";

import { collection, addDoc, setDoc } from "firebase/firestore";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import illustrator from "./images/Group.png";
import logo from "./images/logo.png";
import mailIcon from "./images/icon.png";
import viewIcon from "./images/view.png";
import lockIcon from "./images/lock.png";
import googleIcon from "./images/Google.png";
import gitlabIcon from "./images/gitlab.png";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Auth() {
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const param = useParams();
  const revealRef = useRef();
  const passwordRef = useRef();
  const usernameError = useRef();
  const passwordError = useRef();
  const emailError = useRef();
  const errorRef = useState();
  const auth = getAuth();

  const navigate = useNavigate();

  let regRef = useRef();
  let submitRef = useRef();
  useEffect(() => {
    revealRef.current.addEventListener("click", () => {
      let type = passwordRef.current.type;
      if (type == "password") {
        passwordRef.current.type = "text";
      } else {
        passwordRef.current.type = "password";
      }
    });
  }, []);

  useEffect(() => {
    param["*"] == "signup" ? setSignUp(true) : setSignUp(false);
  }, []);

  //firebase
  

  //Changing login to registration
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
    //signin
    if (!signUp) {
      if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("email", user.email);


            navigate("/upload");
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
            // alert(errorMessage)
            errorRef.current.innerText = errorMessage;
          });
      } 
      // else {
        
      //     errorRef.current.innerText =
      //       " Please Fill in your correct details below";
      //     console.log("empty");
        
      // }
    } 
    
    //signup
    else {
      if ( email && password && username) {
        console.log(email, password, username);
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (user) => {
            try {
              const docRef = await setDoc(
                collection(db, "users", email),
                {
                  name: username,
                  email: email,
                },
                { merge: true }
              );
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }

            console.log(user, "user");
            localStorage.setItem("email", user.email);
            dispatch({
              action: actionTypes.set_user,
              user: user,
            });
            setSignUp(false);
            navigate("/upload");
          })
          .catch((error) => {
            alert(error.message);
            let errorMessage = error.message?.split("/")[1]?.split(")")[0];
            errorRef.current.innerText = errorMessage;
          });
      }
      //  else {
      //   errorRef.current.innerText =
      //     " Please Fill in your correct details below";
      //   console.log("empty");
      // }
    }
    e.preventDefault();
  }

  //client-side validation
  // useEffect(()=>{

  function errorChecker(error, ref, name) {
    if (error.length < 6) {
      ref.current.innerText = `${name} should have at least 6 characters`;
     
    } else {
      ref.current.innerText = ``;
    }
  }

  console.log(email, "email");

  // }, [])

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
        <p className="auth__Error" ref={errorRef}></p>
        <form
          className="auth__Form"
          onSubmit={(e) => {
            authenticate(e);
          }}
        >
          <div className="auth__Input">
            <div className="auth__Name">
              <img src={mailIcon} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  errorChecker(e.target.value, emailError, "Email");
                }}
                required
              />
            </div>
            <div className="error-message" ref={emailError}></div>
          </div>

          <div className="auth__Password">
            <div className="auth__Name">
              <img src={lockIcon} />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  errorChecker(e.target.value, passwordError, "Password");
                }}
                ref={passwordRef}
                required
              />
            </div>
            <img src={viewIcon} ref={revealRef} />
            <div className="error-message" ref={passwordError}></div>
          </div>

          {signUp && (
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
                <div className="error-message" ref={usernameError}></div>
              </div>
            </>
          )}

          {!signUp && (
            <p className="auth__ForgotPassword"> Forgot password? </p>
          )}
          <input
            type="submit"
            value={!signUp ? `Log in` : `sign up`}
            className="auth__Submit neumorph"
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
          {!signUp ? `Have no account yet?` : `Already have an account?`}
        </p>

        <button className="auth__Sign neumorph" ref={regRef}>
          {" "}
          {!signUp ? `Registration` : `Login`}
        </button>
      </div>
    </div>
  );
}

export default Auth;
