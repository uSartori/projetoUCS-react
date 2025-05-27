import React from "react";

type ProfileProps = {
  name: string;
  descricao: string;
  imageUrl: string;
};

const ProfileComponent = ({ name, imageUrl, descricao }: ProfileProps) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">{name}</h1>
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto rounded-md mb-6 object-cover"
      />
      <p className="text-gray-700 text-justify whitespace-pre-line">{descricao}</p>
    </div>
  );
};

export default ProfileComponent;
