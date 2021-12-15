import React from "react";
import Dashboard from "./Dashboard";
import "./Main.css";
import Nav from "./Nav";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Upload from "./Upload";
function Main() {
  return (
    <div className="main">
        {/* <Nav/> */}
        <div className="main__Content">

      <div className="main__Left">
          <Sidebar/>
      </div>
      <div className="main__Right">
{/* <Upload/> */}
{/* <Dashboard/> */}
{/* <Profile/> */}
      </div>
        </div>
    </div>
  );
}

export default Main;
