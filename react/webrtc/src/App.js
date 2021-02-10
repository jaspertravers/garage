import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  //const stream = navigator.mediaDevices.getUserMedia({ video: true });
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  });

  const videoStyle = { border: "1px solid black" };
  return (
    <div>
      <p>hello</p>
      <video style={videoStyle} ref={videoRef} autoPlay />
    </div>
  );
}

export default App;
