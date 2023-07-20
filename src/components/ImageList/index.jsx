import React from "react";
import ImageCard from "./../ImageCard/index";

const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-fill gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
};

export default ImageList;
