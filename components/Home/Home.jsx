import React, { useState, useEffect } from "react";
import "./home.css";
import video1 from "../../assets/videos/vedio-1.mp4";
import video2 from "../../assets/videos/vedio-2.mp4";
import video3 from "../../assets/videos/vedio-1.mp4";
import video4 from "../../assets/videos/vedio-1.mp4";
function Home() {
  const videos = [video1, video2, video3, video4];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Switch video every 10 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [videos]);
  return (
    <section className="home">
      {/* Video Background */}
      {videos.map((video, index) => (
        <video
          key={index}
          className={`video-slide ${
            index === activeVideoIndex ? "active" : ""
          }`}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      <div className="content">
        {/* Your content here */}
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

      {/* Pagination buttons */}
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
