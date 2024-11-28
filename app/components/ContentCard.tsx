import React from "react";


type ContentCardProps = {
  title: string;
  image: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, image, description , buttonLabel , onButtonClick}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {/* <Button
          size="$4"
          backgroundColor="$blue10"
          color="white"
          borderRadius="$2"
          onPress={onButtonClick}
          className="card-button">
          {buttonLabel}
        </Button> */}
      </div>
    </div>
  );
};

export default ContentCard;
