import React from "react";
import { events } from "../data/event";
import EventCard from "../components/EventCard";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">EVENT</h1>
      <div className="grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
