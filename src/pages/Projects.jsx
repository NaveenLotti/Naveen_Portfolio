import React from "react";
import git_img from '../assets/icons8-github-logo-94.png'
import "./Projects.css";
const Project = () => {
    return (
        <>
            <h1>Projects</h1>
            <div className="projectsContainer">
                <div className="projects">
                    <a href="https://github.com/NaveenLotti/Doc_verify"><img src={git_img} alt="" /></a>
                    <h2>Online Document Verifier</h2>
                    <p>Python,BERT,React.Js</p>
                </div>
                <div className="projects">
                    {/* <a href="https://github.com/NaveenLotti/StudentSkillFinder"><img src={git_img} alt="" /></a> */}
                    <a href="https://github.com/NaveenLotti/SkillFinderBAckEnd"><img src={git_img} alt="" /></a>
                    <h2>Student Skill FInder</h2>
                    <p>React.Js,MangoDB,Node.Js,Express.Js</p>
                </div>
                <div className="projects">
                    <a href="https://github.com/NaveenLotti/calculator"><img src={git_img} alt="" /></a>
                    <h2>Andriod calculator</h2>
                    <p>React Native, Expo, java script</p>
                </div>
                <div className="projects">
                    <a href="https://github.com/NaveenLotti/Snake-Game"><img src={git_img} alt="" /></a>
                    <h2>Python snake Game</h2>
                    <p>Python, Pygame</p>
                </div>
                <a href="https://studyroomss.vercel.app/">
                    <div className="projects">
                        <a href="https://github.com/NaveenLotti/studyroomss"><img src={git_img} alt="" /></a>
                        <h2>Study Sphere</h2>
                        <p>MERn Stack</p>
                    </div>
                </a>

                <div className="projects">
                    <a href="https://github.com/NaveenLotti/amazon_challenge-"><img src={git_img} alt="" /></a>
                    <h2>Product Price Predictor</h2>
                    <p>Python,Machine Learning</p>
                </div>
            </div>
        </>
    );
}

export default Project;