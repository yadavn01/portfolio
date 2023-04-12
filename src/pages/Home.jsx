import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import "../styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        <div className="slider">
        <Slider 
        dots={false}
        infinite={true}
        slidesToShow={3}
        speed = {300}
        centerMode= {true}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        >
        
       <div> <i class="devicon-html5-plain"></i></div>
       <div> 
            <i class="devicon-css3-plain"></i>
          </div>
       <div>
            <i class="devicon-javascript-plain"></i>
          </div>
       <div>
            
       <i class="devicon-postgresql-plain"></i>
          
          </div>
       <div>
            <i class="devicon-react-original"></i>
          </div>
       <div>
            <i class="devicon-typescript-plain"></i>
          </div>
          <div>
            <i class="devicon-ruby-plain"></i>
          </div>
          <div>
            <i class="devicon-rails-plain"></i>
          </div>
          <div>
            <i class="devicon-github-original"></i>
          </div>
      </Slider>
      </div>

      
      </div>
    </div>
  );
}

export default Home;