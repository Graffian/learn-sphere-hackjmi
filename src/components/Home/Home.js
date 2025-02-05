import styles from "./Home.css"
import {useState,useRef} from "react"
function Home(){
  const courseInputRef = useRef()
  const personInputRef = useRef()
  return(
    <>
      <div className="course-div">
        <h2>Choose What You're most interested in</h2>
        <input ref={courseInputRef} className="course-input" placeholder ="enter the exam you are interested interested in ....." name="courses"/>
        <div className="course-list">
          <ul>
            <li onClick={()=>{courseInputRef.current.value="Jee Main"}}>JEE MAIN</li>
            <li onClick={()=>{courseInputRef.current.value="NEET"}}>NEET</li>
            <li onClick={()=>{courseInputRef.current.value="NDA"}}>NDA</li>
            <li onClick={()=>{courseInputRef.current.value="IAS"}}>IAS</li>
            <li onClick={()=>{courseInputRef.current.value="ICSE 10th BOARDS"}}>ICSE BOARDS(10)</li>
            <li onClick={()=>{courseInputRef.current.value="CBSE 10th BOARDS"}}>CBSE BOARDS(10)</li>
            <li onClick={()=>{courseInputRef.current.value="ICSE 12th BOARDS"}}>ICSE BOARDS(12)</li>
            <li onClick={()=>{courseInputRef.current.value="CBSE 12th BOARDS"}}>CBSE BOARDS (12)</li>
          </ul>
        </div>
           <input ref={personInputRef} className="person-input" placeholder ="enroll as....."/>
           <div className="person-list">
          <ul>
            <li onClick={()=>{personInputRef.current.value="Teacher"}}>TEACHER</li>
            <li onClick={()=>{personInputRef.current.value="Student"}}>STUDENT</li>
            <li onClick={()=>{personInputRef.current.value="Tutor"}}>TUTOR</li>
          </ul>
        </div>
        <button className="enter-button">ENTER</button>
      </div>
    </>
    )
}
export default Home