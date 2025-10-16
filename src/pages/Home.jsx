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


const Home = () => {
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

      <div className="about" id="about" style={{
        display: 'flex',
        height: '540px',
        backgroundColor: '#000000',
        borderRadius: '50px',
        paddingTop: '20px',
        paddingBottom: '20px',
        border: '1px solid #BC8BC2',
        marginLeft: '150px',
        marginRight: '150px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '50px',
        marginTop: '50px',
      }}>
        <div className="profile" style={{ width: '400px' }}>
          <ProfileCard
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
          />
        </div>

        <div className="text_me" style={{
          maxWidth: '600px',
          fontSize: '1.2rem',
          color: '#ffffff',
        }}>
          
        </div>
      </div>

      <div className="projects" id="projects">
      </div>
      <Footer />

    </>
  );
}

export default Home;
