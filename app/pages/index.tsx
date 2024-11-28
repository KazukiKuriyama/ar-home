import React from "react";
import { contents } from "../../data/contents";
import ContentCard from "../components/ContentCard";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">EVENT</h1>
      <div className="grid">
        {contents.map((content) => (
          <ContentCard
            key={content.id}
            title={content.title}
            image={content.image}
            description={content.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
