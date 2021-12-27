import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import illustrate from ".././images/Illustration/illustrate.png";

import {
  collection,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [projectsDone, setProjectsDone] = useState([]);
  const [projectsUndone, setProjectsUndone] = useState([]);
  
  const [{ email }, dispatch] = useStateValue();

  const q = collection(db, "users", email, "files");


  useEffect(() => {
    const results = async () => {
      const result = await onSnapshot(q, (file)=>
      
      setProjects(file?.docs?.map((doc) => doc.data()))
      )
      
    };

    results();

  }, []);
  useEffect(()=>{

    setProjectsDone(projects.filter(proj=>proj.status=='done'))
    setProjectsUndone(projects.filter(proj=>proj.status=='undone'))
  
    console.log(projectsDone, projectsUndone, 'pp')
  },[projects])

  useEffect(() => {
    const workRef = document.querySelectorAll(
      ".dashboard__Workdone .dashboard__Title"
    );
    const listRef = document.querySelectorAll(".dashboard__Lists");

    workRef.forEach((work, i) => {
      work.addEventListener("click", () =>
        listRef[i].classList.toggle("block")
      );
    });
  }, []);

 

  return (
    <div className="dashboard">
      <div className="dashboard__Image">
        {/* <img src={illustrate} alt="" /> */}
      </div>
      <div className="dashboard__Content">
        <h1 className="dashboard__Header">Dashboard</h1>
        <div className="dashboard__Workdone">
          <div className="dashboard__WorkdoneHeader">
            <h3 className="dashboard__Title">Total Work?</h3>
            <p className="dashboard__Details">
              {projects.length} / <span>20</span>
            </p>
          </div>
          <ol className="dashboard__Lists">
            {projects.map((project) => (
              <>
              <li key={project.name} className="dashboard__List">{project.name}</li>
              <a href={project.link}>{project.link}</a>
              </>
              
            ))}

          </ol>
        </div>
        <div className="dashboard__Workdone">
          <div className="dashboard__WorkdoneHeader">
            <h3 className="dashboard__Title">Done</h3>
            <p className="dashboard__Details">
              {projectsDone.length} / <span>{projects.length}</span>
            </p>
          </div>
          <ol className="dashboard__Lists">
            {projectsDone.map((project) => (
              <>
              
              <li className="dashboard__List">{project.name}</li>
              <a href={project.link} download> {project.link}</a>
              </>
             ) )}

           
          </ol>
        </div>

        <div className="dashboard__Workdone">
          <div className="dashboard__WorkdoneHeader">
            <h3 className="dashboard__Title">In Progress</h3>
            <p className="dashboard__Details">
              {projectsUndone.length} <span></span>
            </p>
          </div>
          <ol className="dashboard__Lists">
            {projectsUndone.map((project) => (
              <li className="dashboard__List">{project.name}</li>
            ))}

              </ol>
        </div>
        <div className="dashboard__Complain">
          <h4>Have a complaint?</h4>
          <p>Email us @dfmopeoluwa@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
