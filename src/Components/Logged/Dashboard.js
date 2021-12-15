import React from "react";
import "./Dashboard.css";
import illustrate from '.././images/Illustration/illustrate.png'
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__Image">
        {/* <img src={illustrate} alt="" /> */}
        </div>   
        <div className="dashboard__Content">
          <h1 className="dashboard__Header">Dashboard</h1>
          <div className="dashboard__Workdone">
            <div className="dashboard__WorkdoneHeader">
            <h3 className="dashboard__Title">Workdone?</h3>
                    <p className="dashboard__Details">
                    16 / <span>20</span>
                    </p>

            </div>
            <ol className="dashboard__Lists">
              <li className="dashboard__List">The enemy of the world</li>
              <li className="dashboard__List">The enemy of the world</li>
              <li className="dashboard__List">The enemy of the world</li>
              <li className="dashboard__List">The enemy of the world</li>
            </ol>
          </div>
          <div className="dashboard__Workdone">
          <div className="dashboard__WorkdoneHeader">
            <h3 className="dashboard__Title">Workdone?</h3>
                    <p className="dashboard__Details">
                    16 / <span>20</span>
                    </p>

            </div>
                <ol className="dashboard__Lists">
                <li className="dashboard__List">The enemy of the world</li>
                <li className="dashboard__List">The enemy of the world</li>
                <li className="dashboard__List">The enemy of the world</li>
                <li className="dashboard__List">The enemy of the world</li>
                </ol>
          </div>
          <div className="dashboard__Complain">
              <h4>
              Have a complaint?

              </h4>
              <p>Email us @dfmopeoluwa@gmail.com</p>
          </div>
        </div>


     
    </div>
  );
}

export default Dashboard;
