import React from "react";
import "./Home.css";
import RotatingText from "../components/reactbits/RotatingText/RotatingText";
import GlitchText from "../components/reactbits/GlitchText/GlitchText";
import CircularGallery from "../components/reactbits/CircularGallery/CircularGallery";
import ProfileCard from "../components/reactbits/ProfileCard/ProfileCard";
import pro_img from '../assets/ChatGPT Image Jul 22, 2025, 09_57_42 AM (1).png'
import icon_img from '../assets/code.png';
import Galaxy from "../components/reactbits/Galaxy/Galaxy";
import ScrollStack, { ScrollStackItem } from "../components/reactbits/ScrollStack/ScrollStack";
import imgg1 from '../assets/imgg1.jpg';
import imgg2 from '../assets/imgg2.png';
import imgg3 from '../assets/imgg3.jpg';
import imgg4 from '../assets/imgg4.webp';
import Footer from "../components/Footer";


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
          <GlitchText >NAVEEN </GlitchText>
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
                backgroundColor: "#5516ebff",
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
        backgroundColor: '#000000',
        borderRadius: '50px',
        paddingTop: '50px',
        paddingBottom: '20px',
        border: '1px solid #00ffd1',
        marginLeft: '90px',
        marginRight: '90px',
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
          <p>
            Hi! I’m Naveen Kumar Lotti, a Computer Science and Engineering student with a deep interest in building smart, user-focused solutions. I love working on real-world challenges and exploring how technology can make an impact.
          </p>
          <p>
            I’m particularly passionate about Machine Learning, Deep Learning, and creating intelligent systems that adapt and learn. Alongside this, I have strong skills in web development and enjoy crafting modern, responsive applications with great UI/UX.
          </p>
          <h3 style={{ marginTop: '20px', color: '#00ffd1' }}>Tech Stack</h3>
          <ul style={{ lineHeight: '1.8' }}>
            <li><b>Frontend:</b> HTML5, CSS3, JavaScript, React.js</li>
            <li><b>Backend:</b> Node.js, Express.js, Flask, Kotlin</li>
            <li><b>Databases:</b> MongoDB, MySQL</li>
            <li><b>Other Tools:</b> Git, Vite, Figma, YOLOv5, Transformers (BART)</li>
          </ul>
        </div>
      </div>

      <div className="projects" id="projects">
        <ScrollStack>
          <ScrollStackItem>
            <div className="inner_data1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginTop: '0px' }}>
              <div className="texts" style={{ width: '700px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <h2>Doc Verify-Intelligent Document Verification System</h2>
                <p>A machine learning-based web application that verifies documents by extracting key information, validating constraints (like area size, signatures, and certificates), and automatically approving or rejecting files. Built with Python (Flask), BART Transformers for text processing. Supports PDFs, Word files, and image formats, enabling seamless and efficient document validation for organizations.</p>
              </div>
              <img style={{ height: '250px', width: '500px' }} src={imgg3} alt="pic" />
            </div>

          </ScrollStackItem>
          <ScrollStackItem>
            <div className="inner_data1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginTop: '0px' }}>
              <div className="texts" style={{ width: '700px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <h2>SkillFinder–Student Technical Skills Lookup</h2>
                <p>A modern web application to search and display students’ technical skills using their roll numbers. Built with React.js (frontend), Node.js & Express.js (backend), and MongoDB (database). The app features a clean UI/UX with animations and supports fast, responsive lookups for technologies, programming languages, and tools each student is proficient in.</p>
              </div>
              <img style={{ height: '250px', width: '400px' }} src={imgg2} alt="pic" />
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="inner_data1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginTop: '0px' }}>
              <div className="texts" style={{ width: '700px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <h2>Recyclable Waste Classification-Smart Waste Sorting System</h2>
                <p>A deep learning model that classifies waste into recyclable and non-recyclable categories using image recognition. Trained with TensorFlow and Keras on a custom dataset of waste materials, the system helps automate waste management processes by enabling accurate and real-time waste segregation.
                </p>
              </div>
              <img style={{ height: '250px', width: '400px' }} src={imgg1} alt="pic" />
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="inner_data1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginTop: '0px' }}>
              <div className="texts" style={{ width: '700px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <h2>Object Detection Model – Real-Time Object Recognition System</h2>
                <p>A YOLOv5-based deep learning model capable of detecting and classifying multiple objects in images and videos with high accuracy. Designed to assist in tasks like inventory management and surveillance, the model was trained on a custom dataset and deployed for real-time use with a Python Flask backend and a React.js frontend for interactive visualization..</p>
              </div>
              <img style={{ height: '250px', width: '400px' }} src={imgg4} alt="pic" />
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
      <Footer />

    </>
  );
}

export default Home;
