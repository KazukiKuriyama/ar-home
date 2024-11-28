import React from "react";
import Image from "next/image";

type ContentCardProps = {
  title: string;
  image: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, image, description, buttonLabel, onButtonClick }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card-image" width={16 * 20} height={9 * 20} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button color="black" onClick={onButtonClick} className="card-button" style={{ margin: 10 }}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
