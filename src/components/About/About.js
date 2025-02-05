import styles from './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About(){
  return(
    <>
       <nav className="contacts-nav">
         <div className="contact-app-link">
          
          <li className="github-link"><FontAwesomeIcon className="appIcon" icon={faGithub} /><b>GITHUB</b></li>
          <li className="linkedIn-link"><FontAwesomeIcon className="appIcon" icon={faLinkedin} /><b>LINKEDIN</b></li>
          <li className="twitter-link"><FontAwesomeIcon className="appIcon" icon={faXTwitter} /><b>TWITTER</b></li>
          <li className="discord-link"><FontAwesomeIcon className="appIcon" icon={faDiscord} /><b>DISCORD</b></li>
          <li className="instagram-link"><FontAwesomeIcon className="appIcon" icon={faInstagram} /><b>INSTAGRAM</b></li>
        
         </div>
         
         <div className="desc-div">
           <p className="desc-text"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis metus a pretium placerat. Ut sed vulputate nisi. Pellentesque commodo rhoncus tellus id aliquam. Nullam suscipit hendrerit justo. Aliquam suscipit nulla id lorem tempor interdum. Donec et luctus quam. Vivamus nec nulla consequat purus vehicula iaculis. Nulla ipsum ipsum, finibus fringilla lorem non, fermentum gravida elit. Morbi aliquet nec sem et consectetur. Fusce mattis neque eget ligula blandit ultricies</b></p>
         </div>
       </nav>
      </>
      )
}
export default About