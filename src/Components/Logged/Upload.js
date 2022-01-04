import React, { useRef, useState, useEffect } from "react";
import "./Upload.css";
import illustrate from "../images/Illustration/illustrate2.png";
import { storage, db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  runTransaction,
} from "firebase/firestore";

import { useStateValue } from ".././StateProvider";
import { actionTypes } from ".././reducer";

function Upload() {
  const [{email,user}, dispatch] = useStateValue();


 

  const [files, setFiles] = useState({
    files: "",
  });
  const uploadRef = useRef();
  function reset() {
    uploadRef.current.value = "";
    setFiles("");
  }

  let removeRef = useRef();

  function selectFile(e) {
    setFiles({
      files: Array.from(e),
    });
  }
  function uploadFile() {
    files.files.forEach((file) => {
      const storageRef = ref(storage, `${email}/${file.name}`);
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          console.log(snapshot, "snapshot");
          getDownloadURL(storageRef, file).then(async (url) => {
            console.log(url, "url");


            try {
              const docRef = await setDoc(
                doc(db, "users", email, "files", file.name),
                {
                  name: file.name,
                  link: url,
                  status: "undone",
                },
                { merge: true }
              );

              setFiles({
                files: "",
              });
              // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          });
        })

        .catch((err) => {
          console.log(err, "error message");
        });
    });
  }

  return (
    <div className="upload">
      <div className="upload__Image">
        <img src={illustrate} alt="" />
      </div>
      <h1 draggable className="upload__Title">
        Upload Files
      </h1>
      <div
        className="upload__Draggable"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          selectFile(e.dataTransfer.files);
        }}
      >
        <h3>
          {!files.files ? "Drag files here" : `${files.files.length} files`}
        </h3>
        {!files.files ? (
          <p>Make sure file is not more than 10mb</p>
        ) : (
          <div className="upload__Lists">
            {files.files.map((file, id) => (
              <div ref={(e) => removeRef} className="upload__List">
                {file.name}

                <div
                  className="upload__ListRemove"
                  key={id}
                  id={id}
                  onClick={(e) => {
                    files.files.splice(id, 1);
                    setFiles({
                      files: [...files.files],
                    });
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="upload__Buttons">
        <input
          id="upload__Upload"
          ref={uploadRef}
          type="file"
          multiple
          className="upload__Upload"
          onChange={(e) => selectFile(e.currentTarget.files)}
        />
        <label className="upload__Upload" for="upload__Upload">
          {" "}
          Select Files
        </label>

        <button className="upload__Cancel" onClick={reset}>
          cancel
        </button>

        {files.files && (
          <button className="upload__Done" onClick={uploadFile}>
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default Upload;
