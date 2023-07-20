import React from "react";
import { formatDate } from "../../utils/formatDate";

const ImageCard = ({
  urls,
  alt_description,
  description,
  user,
  created_at,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          loading="lazy"
          className="w-full h-80 object-cover"
          src={urls.full}
          alt={alt_description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{description}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img
                loading="lazy"
                src={user.profile_image.large}
                alt={user.username}
              />
            </div>
          </div>
          <div className="self-center">
            <p className="font-semibold text-base">{user.first_name}</p>
            <span>{formatDate(created_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
