import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import "../styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Emoji from "../components/Icons/Emoji";
//background image
//import background from 'herobg.png';



function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="heading"><h2> Hi, I'm Naman</h2>
        <Emoji symbol="👋" label="Wave hello!" />
        </div>
      
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
          {/* <InstagramIcon></InstagramIcon>
        <EmailIcon></EmailIcon>
        <LinkedInIcon></LinkedInIcon> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        </div>
        <div className="slider">
        <Slider 
        dots={false}
        infinite={true}
        slidesToShow={3}
        speed = {300}
        centerMode= {true}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={1500}
        arrows={false} 
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
      

      <div className="experience">
      </div>
      <h1> Experience</h1>
      <div className="timeline">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          My Random High School, Random Place, Random State
        </h3>
        <p> High School Diploma</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          My Cool University, Vancouver, British Columbia
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Computer Science</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2020"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Back End Engineer - Google
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>Developed the backend infrastructure for 3 projects.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - present"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Full Stack Engineer - Twitch
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Helped the team launch 2 major features by working both in the front
          end and back end.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
    </div>
  );
}

export default Home;