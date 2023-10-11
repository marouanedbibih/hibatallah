import React, { useState, useEffect } from "react";
import "./home.css";
function Home() {
  const videos = [video1, video2, video3, video4];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);


  return (
    <section className="home">


      <div className="content">
      
        <h1>
          Welcome to <br /> <span>Hibat allah cars</span>
        </h1>
        <p>
          Where we offer the most exclusive and luxurious rental cars for those
          who demand the best. Our fleet includes high-performance vehicles from
          top luxury brands, such as Rolls-Royce, Lamborghini, Bentley, and
          Ferrari. Follow us for the ultimate driving experience and to see the
          world's most exclusive vehicles in action.
        </p>
        <a href="./cars.php">
          <button className="btn-style">View more</button>
        </a>
      </div>

      
      <div className="pagination">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`pagination-button ${
              index === activeVideoIndex ? "active" : ""
            }`}
            onClick={() => setActiveVideoIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
