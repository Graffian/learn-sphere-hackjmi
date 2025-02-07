import {useEffect,useState} from "react"
import {useParams , useNavigate} from "react-router-dom"
import Map from "../../map.js"
import styles from "./Courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
function Course(){
  const params = useParams()
  const navigate = useNavigate()
  const [latitude,setLatitude] = useState(null)
  const [longitude,setLongitude]=useState(null)
  const [erroMsg,setErrorMsg] = useState("")
  
    
      useEffect(()=>{
        if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }else{
      setErrorMsg("Refresh the page and allow the location to get access")
    }
      },[latitude])

    
  return(
    <>
      {latitude!=null?(<Map  longitude={longitude}  latitude={latitude}/>):(<p>LOADING!! PLEASE Wait for 5sec and  Refresh the page</p>)}
      {latitude==null?(<p style={{color:"red"}}>{erroMsg}</p>):null}
      <div className="tutor-hire-div">
        <div onClick={()=>{navigate(`/tutor/1`)}} className="tutor-1">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ADITYA SINGH</b></p>
            <p style={{color:"white"}}>6KM AWAY (prefers offline)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 500/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/2")}} className="tutor-2">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>RYAN CHAKRABORTY</b></p>
            <p style={{color:"white"}}>8KM AWAY (prefers offline)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 300/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/3")}} className="tutor-3">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ANKIT TIWARI</b></p>
            <p style={{color:"white"}}>10KM AWAY (prefers online)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 350/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/4")}} className="tutor-4">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ANURAG KASHYAP</b></p>
            <p style={{color:"white"}}>15KM AWAY (prefers online)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 100/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/5")}} className="tutor-5">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>AYUSH PANDA</b></p>
            <p style={{color:"white"}}>20KM AWAY (prefers online)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 200/day</b></p>
          </span>
        </div>
      </div>
      <div className="teacher-hire-div">
          <div style={{color:"white"}} className="teacher-0">
            <img src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              
              <FontAwesomeIcon icon={faUser}/>
              
            </span>
            <p style={{color:"white"}} className="name-text"><b>NAME:ADITYA GUPTA</b></p>
            <span className="stars-nd-shit">
              <p style={{color:"white"}} className="course-text"><b>COURSE:PHYSICS (JEE)</b></p>
              <p style={{color:"yellow"}} className="star-icon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text">Rs 2000</p>
            </span>
            <span className="description-text">
              <p><b>DESCRIPTION: Highly proffessional in physics and ex fiitjee and allen faculty Btech from nit RKL</b></p>
            </span>
          </div>
      </div>
    </>
    )
}
export default Course