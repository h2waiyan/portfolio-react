import React from "react";

function Avatar({ src, alt }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="rounded-full w-16 h-16 mb-2 object-cover"
      />
      <p className="text-sm text-gray-700">{alt}</p>
    </div>
  );
}

export default Avatar;
