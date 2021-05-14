import React from "react";

export default function FaceRecognition({ imageUrl }) {
  console.log(imageUrl);
  return (
    <div className="center ma">
      <div>
        <img src={imageUrl} alt="" width="auto" height="300px" />
      </div>
    </div>
  );
}
