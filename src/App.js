import React from 'react';
import './App.css';
import NavBar  from './component/NavBar';

function App() {
  const uploadImage = () => {
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("image", file);

    fetch("/dehaze", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Display original image
        var originalImage = document.getElementById("originalImage");
        originalImage.src = URL.createObjectURL(file);
        originalImage.style.display = "block";

        // Display dehazed image
        var dehazedImage = document.getElementById("dehazedImage");
        dehazedImage.src = "data:image/jpeg;base64," + data.image;
        dehazedImage.style.display = "block";
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
    <div className="container-fluid">
    <NavBar title='Dehaze.io' aboutText='About' contact="connect"/>
      
        <h1 className="text-center">Dehaze.io</h1>
        <div className="row">
          <div className="col-6">
            <input
              type="file"
              id="fileInput"
              className="btn  btn-info"
              accept="image/*"
            />
          </div>
          
          <div className="col-6">
            <button type="button" className="btn btn-outline-secondary" onClick={uploadImage}>
              Dehaze Image
            </button>
          </div>
        </div>
        <br />
        <div className="row">
        <img id="originalImage" className="col-6" src="#" alt="Original" />
        <img id="dehazedImage" className="col-6" src="#" alt="Dehazed"  />
      </div>
      </div>
    </>
  );
}

export default App;
