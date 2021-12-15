import React from 'react'
import './Upload.css'
import illustrate from '../images/Illustration/illustrate2.png'

function Upload() {
    return (
        <div className='upload'>
            <div className="upload__Image">
                <img src={illustrate} alt="" />
            </div>
            <h1 className="upload__Title">
                Upload Files
            </h1>
            <div className="upload__Draggable">
                <h3>Drag files here</h3>
                <p> Make sure file is not more than 10mb</p>
            </div>
            <div className="upload__Buttons">

            <button className='upload__Upload'> Upload</button>
            <button className='upload__Cancel'>cancel</button>
            </div>
        </div>
    )
}

export default Upload
