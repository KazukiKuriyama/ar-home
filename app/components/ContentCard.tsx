import React from "react";
import Image from "next/image";

type ContentCardProps = {
  title: string;
  image: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  link?: string;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, image, description, link }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card-image" width={16 * 20} height={9 * 20} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description" style={{ whiteSpace: "pre-wrap" }}>
          {description}
        </p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-button" style={{ margin: 10, display: "inline-block", padding: "10px 20px", background: "#000", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
            体験する
          </a>
        ) : (
          <p style={{ margin: 10, color: "#999" }}>準備中</p>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
