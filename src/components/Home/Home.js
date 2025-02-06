import styles from "./Home.css"
import {useState,useRef} from "react"
import {useNavigate} from "react-router-dom"
function Home(){
  const courseInputRef = useRef()
  const personInputRef = useRef()
  const navigate = useNavigate()
  const [errorMsg,setErrorMsg] = useState("")
  function handleEnterBtn(){
    if (courseInputRef.current.value!="" && personInputRef.current.value=="Student"){
      navigate(`/courses/${courseInputRef.current.value}/${personInputRef.current.value}`)
    }else {
      setErrorMsg("enter both the fields then press enter")
    }
  }
  return(
    <>
      <div className="course-div">
        <h2>Choose the Exam of your choice...</h2>
        <input ref={courseInputRef} className="course-input" placeholder ="enter the exam..." name="courses"/>
        <div className="course-list">
          <ul>
            <li onClick={()=>{courseInputRef.current.value="Jee Main"}}>JEE MAIN</li>
            <li onClick={()=>{courseInputRef.current.value="NEET"}}>NEET</li>
            <li onClick={()=>{courseInputRef.current.value="NDA"}}>NDA</li>
            <li onClick={()=>{courseInputRef.current.value="IAS"}}>IAS</li>
            <li onClick={()=>{courseInputRef.current.value="ICSE 10th BOARDS"}}>ICSE BOARDS(10)</li>
            <li onClick={()=>{courseInputRef.current.value="CBSE 10th BOARDS"}}>CBSE BOARDS(10)</li>
            <li onClick={()=>{courseInputRef.current.value="ICSE 12th BOARDS"}}>ICSE BOARDS(12)</li>
            <li onClick={()=>{courseInputRef.current.value="CBSE 12th BOARDS"}}>CBSE BOARDS(12)</li>
          </ul>
        </div>
           <input ref={personInputRef} className="person-input" placeholder ="enroll as..."/>
           <div className="person-list">
          <ul>
            <li onClick={()=>{personInputRef.current.value="Teacher"}}>TEACHER</li>
            <li onClick={()=>{personInputRef.current.value="Student"}}>STUDENT</li>
            <li onClick={()=>{personInputRef.current.value="Tutor"}}>TUTOR</li>
          </ul>
        </div>
        <button onClick={handleEnterBtn} className="enter-button">ENTER</button>
        <p style={{"color":"red"}}>{errorMsg}</p>
      </div>
    </>
    )
}
export default Home