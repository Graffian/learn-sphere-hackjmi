import {useParams} from "react-router-dom"
import styles from "./Tutor.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Tutor(){
  const params = useParams()
  console.log(params.id)
  function tutorInfo(){
    if(params.id==1){
      return (
        <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>ADITYA SINGH</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">Rs500</p>
      </div> 
    </div>
        )
    }else if(params.id==2){
      return(
        <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>RYAN CHAKRABORTY</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">Rs300</p>
      </div> 
    </div>
        
        )
    }else if(params.id==3){
      return(
         <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>ANKIT TIWARI</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">Rs350</p>
      </div> 
    </div>
        )
    }else if(params.id==4){
      return(
         <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>ANURAG KASHYAP</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">Rs100</p>
      </div> 
    </div>
    )
    }else if(params.id==5){
      return(
      <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>AYUSH PANDA</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">Rs200</p>
      </div> 
    </div>
    )
    }
  }
  return(
    <>
    {tutorInfo()}
    </>
    )
}
export default Tutor