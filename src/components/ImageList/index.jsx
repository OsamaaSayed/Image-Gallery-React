import React from "react";
import ImageCard from "./../ImageCard/index";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <ImageCard key={image.id} />
      ))}
    </div>
  );
};

export default ImageList;
