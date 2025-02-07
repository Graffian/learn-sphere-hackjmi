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
        <div onClick={()=>{navigate(`/tutor/1`)}} className="tutor-0">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ADITYA SINGH</b></p>
            <p style={{color:"white"}}>6KM AWAY (prefers offline)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 500/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/2")}} className="tutor-0">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>RYAN CHAKRABORTY</b></p>
            <p style={{color:"white"}}>8KM AWAY (prefers offline)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 300/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/3")}} className="tutor-0">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ANKIT TIWARI</b></p>
            <p style={{color:"white"}}>10KM AWAY (prefers online)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 350/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/4")}} className="tutor-0">
          <span>
            <p className="userIcon"><FontAwesomeIcon icon={faUser} /></p>
            <p className="tutor-name"><b>ANURAG KASHYAP</b></p>
            <p style={{color:"white"}}>15KM AWAY (prefers online)</p>
            <p className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <p style={{color:"white"}}><b>Rs 100/day</b></p>
          </span>
        </div>
        <div onClick={()=>{navigate("/tutor/5")}} className="tutor-0">
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
            <img style={{borderRadius: "10px 10px 0px 0px"}}src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <p style={{color:"white"}} className="paraType1 name-text"><b>TEACHER: PANKAJ CHAUBEY</b></p>
            <span className="stars-nd-shit">
              <p style={{color:"white", maxWidth:"174px"}} className="paraType1 course-text"><b>COURSE:</b> Physics (JEE)</p>
              <p style={{color:"yellow"}} className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text"><b>Rs 3000</b></p>
            </span>
            <span className="description-text" style={{paddingInline: "20px"}}>
              <p><b>DESCRIPTION:</b> Highly enthusiastic and accomplished teacher, ex-FIITJEE senior faculty, BTech. (IIT Bombay)</p>
            </span>
          </div>

          <div style={{color:"white"}} className="teacher-0">
            <img style={{borderRadius: "10px 10px 0px 0px"}}src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <p style={{color:"white"}} className="paraType1 name-text"><b>TEACHER: DR. JAGJEET SINGH</b></p>
            <span className="stars-nd-shit">
              <p style={{color:"white", maxWidth:"174px"}} className="paraType1 course-text"><b>COURSE:</b> Physical Chemistry (JEE)</p>
              <p style={{color:"yellow"}} className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text"><b>Rs 2500</b></p>
            </span>
            <span className="description-text" style={{paddingInline: "20px"}}>
              <p><b>DESCRIPTION:</b> Highly enthusiastic and accomplished teacher, MTech. (IIT Guwahati), PhD. (ETH Zurich)</p>
            </span>
          </div>

          <div style={{color:"white"}} className="teacher-0">
            <img style={{borderRadius: "10px 10px 0px 0px"}}src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <p style={{color:"white"}} className="paraType1 name-text"><b>TEACHER: R CHINNASWAMY</b></p>
            <span className="stars-nd-shit">
              <p style={{color:"white", maxWidth:"174px"}} className="paraType1 course-text"><b>COURSE:</b> Organic Chemistry (JEE)</p>
              <p style={{color:"yellow"}} className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text"><b>Rs 2000</b></p>
            </span>
            <span className="description-text" style={{paddingInline: "20px"}}>
              <p><b>DESCRIPTION:</b> Highly enthusiastic and accomplished teacher, ex-PW & ex-Unacademy senior faculty, BTech. (NIT Trichy) </p>
            </span>
          </div>

          <div style={{color:"white"}} className="teacher-0">
            <img style={{borderRadius: "10px 10px 0px 0px"}}src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <p style={{color:"white"}} className="paraType1 name-text"><b>TEACHER: VINEET SEHGAL</b></p>
            <span className="stars-nd-shit">
            <p style={{color:"white", maxWidth:"174px"}} className="paraType1 course-text"><b>COURSE:</b> Inorganic Chemistry (JEE)</p>
              <p style={{color:"yellow"}} className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text"><b>Rs 2750</b></p>
            </span>
            <span className="description-text" style={{paddingInline: "20px"}}>
              <p><b>DESCRIPTION:</b> Highly enthusiastic and accomplished teacher, ex-Aakash senior faculty, BTech. (IIT Kanpur)</p>
            </span>
          </div>

          <div style={{color:"white"}} className="teacher-0">
            <img style={{borderRadius: "10px 10px 0px 0px"}}src="https://placehold.co/500x200" alt="teacher-img"/>
            <span className="userIcon">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <p style={{color:"white"}} className="paraType1 name-text"><b>TEACHER: SOUMYA DUTTA</b></p>
            <span className="stars-nd-shit">
              <p style={{color:"white", maxWidth:"174px"}} className="paraType1 course-text"><b>COURSE:</b> Physics (JEE)</p>
              <p style={{color:"yellow"}} className="starIcon"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <p className="price-text"><b>Rs 3000</b></p>
            </span>
            <span className="description-text" style={{paddingInline: "20px"}}>
              <p><b>DESCRIPTION:</b> Highly enthusiastic and accomplished teacher, ex-Bansal faculty, BTech. (NIT Durgapur)</p>
            </span>
          </div>
      </div>
    </>
    )
}
export default Course