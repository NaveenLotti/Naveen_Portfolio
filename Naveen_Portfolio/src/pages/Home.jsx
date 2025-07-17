import React from "react";
import "./Home.css";
import RotatingText from "../components/reactbits/RotatingText/RotatingText";
import TextTrail from "../components/reactbits/TextTrail/TextTrail";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <span className="intro-text">Hello, I'm</span>
        <TextTrail text="Naveen" />
        <TextTrail 
          text="React Bits"
          fontFamily="Figtree"
          fontWeight="900"
          noiseFactor={1.2}
          noiseScale={0.001}
          rgbPersistFactor={0.95}
          alphaPersistFactor={0.92}
          animateColor={true}
          startColor="#ff6b6b"
          textColor="#4ecdc4"
          backgroundColor="#1a1a2e"
          colorCycleInterval={2000}
          supersample={2}
        />
        <TextTrail 
          text="Colorful"
          animateColor={true}
          colorCycleInterval={1500}
          noiseFactor={1.5}
          noiseScale={0.002}
        />
        <span className="intro-text">I’m a</span>
        <div className="intro-box">
          <RotatingText
            texts={[
              "Machine Learning Developer",
              "Android Developer",
              "Web Developer",
              "UI/UX Designer",
            ]}
            mainClassName="dynamic-text"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
