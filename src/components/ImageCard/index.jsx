import React from "react";
import { formatDate } from "../../utils/formatDate";

const ImageCard = ({
  urls,
  alt_description,
  user,
  created_at,
  likes,
  links,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <a className="w-full" href={links.html} target="_blank">
          <img
            loading="lazy"
            className="w-full h-80 object-cover transition-all duration-500 ease-in-out hover:scale-105"
            src={urls.full}
            alt={alt_description}
          />
        </a>
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <a href={user.links.html} target="_blank">
                <img
                  loading="lazy"
                  src={user.profile_image.large}
                  alt={user.username}
                />
              </a>
            </div>
          </div>
          <div className="self-center flex-1">
            <a
              href={user.links.html}
              target="_blank"
              className="font-semibold text-base block hover:underline"
            >
              {user.first_name}
            </a>
            <span>{formatDate(created_at)}</span>
          </div>
          <div className="flex justify-center items-center gap-1 self-center">
            <span>{likes}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
