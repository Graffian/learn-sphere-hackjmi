import Webcam from "react-webcam"
import {useState} from "react"
import styles from "./Teacher.css"
function Teacher(){
   const [verify,setVerify] = useState(false)
  return(
    <>
     

      <div className="teacher-check">
        <span className="teacher-input">
          <input className="teacher-name-input" type="text" placeholder="your name...."/>
          <input className="teacher-number-input" type="number" placeholder="your number..."/>
        </span>
        <span className="teacher-file-input">
          <input className="certificate-input" type="file" placeholder="choose certificates"/>
          <button onClick={()=>{setVerify(true)}} className="verification-cam">Verify</button>
        </span>
      </div>
      
               {!verify?null:( <Webcam style={{width:"450px", height:"300px"}} />)}
    </>
    )
}
export default Teacher