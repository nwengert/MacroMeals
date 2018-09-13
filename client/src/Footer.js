import React from 'react';
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import pinterest from "./images/pinterest.png";
import podcast from "./images/podcast.png"
import snapchat from "./images/snapchat.png";
import youtube from "./images/youtube.png";

function Footer() {
    return (
        <div id="footerDiv">
            <div className="socialLinks" id="socialDiv">
                <a href="https://www.facebook.com/bodbuds" alt="facebook link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook" className="socialImg"/></a>
                <a href="https://www.instagram.com/bodbuds/" alt="instagram link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" className="socialImg"/></a>
                <a href="https://www.pinterest.com/bodbuds/" alt="pinterest link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={pinterest} alt="pinterest"  className="socialImg"/></a>
                <a href="https://www.snapchat.com/add/k-dizzle4rizzle" alt="snapchat link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={snapchat} alt="snapchat"  className="socialImg"/></a>
                <a href="https://www.youtube.com/bodbuds" alt="youtube link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={youtube}  alt="youtube" className="socialImg"/></a>
                <a href="http://www.bodybuddies.libsyn.com/" alt="podcast link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={podcast} alt="podcast"  className="socialImg"/></a>
            </div>
        </div>
    )
}

export default Footer