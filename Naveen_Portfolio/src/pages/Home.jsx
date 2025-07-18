import React from "react";
import "./Home.css";
import RotatingText from "../components/reactbits/RotatingText/RotatingText";
import TextPressure from "../components/reactbits/TextPressure/TextPressure";

const Home = () => {
  return (
    <div className="home-container">
        <div className="box1">
          <span style={{ fontSize: "4rem", color: "#ffffffff", backgroundColor:"transparent",marginLeft:"100px" }}>Hello, I'm</span>
          <TextPressure text="Naveen" style={{ width: "300px", height: "90px", fontSize: "90px" }} />
                </div>
        <div className="intro-box">
          <div className="static-text">
            <span style={{
              fontSize: "4rem",
              color: "#fff",
              backgroundColor: "transparent",
              marginLeft:"300px"
            }}>
              I’m a
            </span>
          </div>
          <div className="dynamic-text">
            <RotatingText 
              texts={[
                "Machine Learning Developer",
                "Android Developer",
                "Web Developer",
                "UI/UX Designer",
              ]}
              style={{
                fontSize: "3rem",
                color: "#fff",
                backgroundColor: "#5516ebff",
                borderRadius: "5px",
                padding: "5px 10px"
              }}
            />
          </div>
</div>

    </div>
  );
}

export default Home
