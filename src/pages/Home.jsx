import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img src="images/profilee.jpg" alt="profile"  />
        <h2> Hi, I'm Naman</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
          {/* <InstagramIcon></InstagramIcon>
        <EmailIcon></EmailIcon>
        <LinkedInIcon></LinkedInIcon> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
               BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              WIP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>HTML/CSS, JavaScript, Python, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;