import React from "react";

type ContentCardProps = {
  title: string;
  image: string;
  description: string;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
