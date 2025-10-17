import React from "react";
import "./Home.css";
import RotatingText from "../components/reactbits/RotatingText/RotatingText";
import CircularGallery from "../components/reactbits/CircularGallery/CircularGallery";
import ProfileCard from "../components/reactbits/ProfileCard/ProfileCard";
import pro_img from '../assets/ChatGPT Image Jul 22, 2025, 09_57_42 AM (1).png'
import icon_img from '../assets/code.png';
import Galaxy from "../components/reactbits/Galaxy/Galaxy";
import Footer from "../components/Footer";
import TextType from "../components/reactbits/TextType/TextType";
import Carousel from "../components/carousel";
import ml_img from '../assets/icons8-machine-learning-100.png';
import android_img from '../assets/icons8-android-144.png';
import web_img from '../assets/icons8-html-100.png';
import uiux_img from '../assets/icons8-figma-144.png';
import Projects from './Projects'
const Home = () => {
  const aboutItems = [
    <div className="profile" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', flexDirection: 'row' }}>
      <div className="a1" style={{ marginLeft: '50px' }}><ProfileCard
        name="L.Naveen Kumar"
        title="Software Engineer"
        handle="NaveenCodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl={pro_img}
        iconUrl={icon_img}
        grainUrl={icon_img}
        showBehindGradient={true}
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => window.open("https://mail.google.com/mail/?view=cm&to=naveenlotti02@gmail.com")}
      /></div>
      <div className="a2" style={{ width: '700px', textAlign: 'justify', marginRight: '70px' }}>
        <h2>Hi there, I'm Naveen</h2>
        <p>I’m a passionate Software Developer who enjoys building responsive web apps, exploring AI integrations, and optimizing user experiences. I love working across the stack — from clean frontend interfaces to scalable backend logic.</p>
        <p>When I’m not coding, I’m probably tweaking UI animations, experimenting with APIs, or learning something new that makes my workflow faster and smarter. I believe great software isn’t just built — it’s crafted.</p>
        <p style={{
          fontWeight: 100, color: '#BC8BC2', textAlign: 'right'
        }}>I write code that people don’t just use — they enjoy</p>
      </div>
    </div>,
    <div className="serivess">
      <h2>Serives</h2>
      <div className="services" style={{
      display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '30px', justifyContent: 'space-around', alignItems: 'center', width: '100%'
    }}>
      <div className="serviceItem">
        <h3>FullStack Development</h3>
        <img src={web_img} alt="" />
        <p>I develop complete web applications with powerful backends and sleek, responsive frontends that work seamlessly across all platforms.</p>
      </div>
      <div className="serviceItem" style={{ marginRight: '100px' }}>
        <h3>AI Model Development</h3>
        <img src={ml_img} alt="" />
        <p>I create intelligent models that learn from data and deliver smart, automated solutions — built for accuracy, performance, and real-world impact.</p>
      </div>
      <div className="serviceItem">
        <h3>App Development</h3>
        <img src={android_img} alt="" />
        <p>I build fast, reliable, and visually appealing Android apps that provide smooth performance and great user interaction.</p>
      </div>
      <div className="serviceItem" style={{ marginRight: '100px' }}>
        <h3>UI/UX Design</h3>
        <img src={uiux_img} alt="" />
        <p>I craft modern, intuitive designs that focus on clarity, usability, and creating meaningful user experiences.</p>
      </div>
    </div></div>
    
  ]
  return (
    <>
      <div className="backGround" style={{
        position: 'fixed',
        inset: 0,
        zIndex: -999,
      }}>
        <Galaxy />
      </div>

      <div className="home-container" id="home">
        <div className="box1">
          <span
            style={{
              fontSize: "4rem",
              color: "#ffffffff",
              backgroundColor: "transparent",
            }}
          >
            HELLO, I’M
          </span>
          <TextType
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
            text={['Naveen Kumar Lotti']}
            typingSpeed={200}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            restartInterval={10000}
          />
        </div>

        <div className="intro-box">
          <div className="static-text">
            <span>I’M  </span>
            <span>A</span>
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
                fontSize: "3.8rem",
                color: "#fff",
                backgroundColor: "#BC8BC2",
                borderRadius: "10px",
                padding: "5px 10px",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ height: '400px', width: '100%', marginTop: '30px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>

      <div id="About"><Carousel items={aboutItems} autoplay={true} interval={4000} /></div>

      <div id="Projects"><Projects /></div>
      
      <Footer />
    </>
  );
}

export default Home;
