import React from "react";
import { Routes, Link,  Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Main.css";
import Nav from "./Nav";
import Payment from "./Payment";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import SignOut from "./SignOut";
import Upload from "./Upload";

// import {useStateValue} from '../../Components/StateProvider'
// import { actionTypes } from "../reducer";
function Main() {
// const[{user}, dispatch]= useStateValue()

// dispatch({
//   type:actionTypes.set_user,
//   user:'Femi'
// })

  return (
    <div className="main">
      {/* <Nav/> */}
      <div className="main__Content">
        <div className="main__Left">
          <Sidebar />
        </div>
            <div className="main__Right">
     
          <Routes>
            
              <Route  path='/upload' element={<Upload />}>
                
              </Route>

              <Route path='/dashboard' element={ <Dashboard />}>
               
              </Route>
              <Route path='/profile' element={ <Profile />}>
               
              </Route>
              <Route path='/payment' element={ <Payment />}>
               
              </Route>

              <Route path='/signOut' element={<SignOut/>} />
          </Routes>
       
            </div>
      </div>
    </div>
  );
}

export default Main;
