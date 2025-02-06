import {useParams} from "react-router-dom"
import styles from "./Tutor.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Tutor(){
  const params = useParams()
  console.log(params.id)
  
  return(
    <>
    <div className="tutorInfo">
      <div className="userIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="tutor-text">
        <p style={{color:"white", fontSize:"1.5em"}}><b>NAME</b></p>
        <p style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <span>
          <button className="negotiateBtn">NEGOTIATE</button>
          <button className="requestBtn">REQUEST</button>
        </span>
      </div>
      <div className="tutor-price">
        <p className="price-text">$200</p>
      </div> 
    </div>
    </>
    )
}
export default Tutor