import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'><InstagramIcon></InstagramIcon>
        <EmailIcon></EmailIcon>
        <LinkedInIcon></LinkedInIcon></div>
    <p> &copy; 2023 Naman yadav</p></div>
  )
}

export default Footer