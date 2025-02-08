import Home from "./components/Home/Home.js"
import Course from "./components/Courses/Courses.js"
import Roadmap from "./components/Roadmap/Roadmap.js"
import About from "./components/About/About.js"
import Tutor from "./components/Tutor/Tutor.js"
import Teacher from "./components/Teacher/Teacher.js"
import {Routes,Route,useNavigate} from "react-router-dom"
import styles from "./app2.css"
function App() {
  const navigate = useNavigate()
  
  return (
    <>
       <nav className="nav-bar">
        
        {/* <div className="nav-left">
          
        </div> */}
        <div className="nav-centre">
          <p className="title-para">LEARN SPHERE</p>
        </div>
        <div className="nav-right">
        <p className="nav-para" onClick={()=>navigate("/")}>HOME</p>
        <p className="nav-para" onClick={()=>{navigate("/roadmaps")}}>ROADMAPS</p>
        <p onClick={()=>{navigate("/about")}} className="nav-para">ABOUT</p>
        </div>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/roadmaps" element={<Roadmap/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses/:exam/Student" element={<Course/>}/>
      <Route path="/courses/:exam/Teacher" element={<Teacher/>}/>
      <Route path="/courses/:exam/Tutor" element={<Teacher/>}/>
      <Route path="/tutor/:id" element={<Tutor/>}/>
    </Routes>
    </>
  )
}

export default App;