import styles from "./Roadmap.css"
import JeeMain from "../Images/JeeMain.webp"
import Nda from "../Images/nda.png"
import Neet from "../Images/Neet.png"
import Ias from "../Images/Ias.jpeg"
import Icse10 from "../Images/Icse10.jpg"
import Cbse from "../Images/Cbse.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Roadmap(){
  return(
    <nav className="roadmap-wrapper">
      <div className="roadmap-div">
        <img className="course-img" src={JeeMain} alt="JEE MAIN LOGO"/>
        <h2>COURSE : JEE MAIN</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
JEE Main is a national-level entrance exam in India for admission to top engineering colleges like NITs, IIITs, and CFTIs. It also serves as a qualifying exam for JEE Advanced, required for admission to IITs.
</p>
<p className="path-desc"><b>PATH: </b>Understand Syllabus & Pattern<FontAwesomeIcon icon={faArrowRight} />Create Study Plan<FontAwesomeIcon icon={faArrowRight} />Master NCERT Concepts<FontAwesomeIcon icon={faArrowRight} />Solve Previous Year Papers<FontAwesomeIcon icon={faArrowRight} />Take Mock Tests<FontAwesomeIcon icon={faArrowRight} />Analyze & Improve<FontAwesomeIcon icon={faArrowRight} />Focus on Weak Areas<FontAwesomeIcon icon={faArrowRight} />Revise Regularly<FontAwesomeIcon icon={faArrowRight} />Practice Time Management<FontAwesomeIcon icon={faArrowRight} />Stay Confident</p>
      </div>
      
      
      <div className="roadmap-div">
        <img className="course-img" src={Neet} alt="JEE MAIN LOGO"/>
        <h2>COURSE : NEET</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The National Eligibility cum Entrance Test (NEET) is a national-level entrance exam in India for admission to undergraduate medical courses (MBBS, BDS, and AYUSH) in government and private medical colleges. It consists of Physics, Chemistry, and Biology sections with a total of 720 marks</p>
<p className="path-desc"><b>PATH: </b>Understand Meet Eligibility Criteria<FontAwesomeIcon icon={faArrowRight} />Understand Exam Pattern & Syllabus<FontAwesomeIcon icon={faArrowRight} />Master NCERT for Biology, Physics & Chemistry<FontAwesomeIcon icon={faArrowRight} />Create Study Plan with Daily Targets<FontAwesomeIcon icon={faArrowRight} />Practice Previous Year Papers & Mock Tests<FontAwesomeIcon icon={faArrowRight} />Analyze Mistakes & Improve Weak Areas<FontAwesomeIcon icon={faArrowRight} />Revise Regularly<FontAwesomeIcon icon={faArrowRight} />Focus on Time Management & Accuracy<FontAwesomeIcon icon={faArrowRight} />Stay Consistent & Confident<FontAwesomeIcon icon={faArrowRight} />Appear for Exam Confidently</p>
      </div>
      
      
      <div className="roadmap-div">
        <img className="course-img" src={Nda} alt="NDA LOGO"/>
        <h2>COURSE : NDA</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The NDA exam, conducted by UPSC, selects candidates for the Army, Navy, and Air Force wings of the National Defence Academy. It includes Mathematics and General Ability Test (GAT) papers
</p>
<p className="path-desc"><b>PATH: </b>
Meet Eligibility Criteria<FontAwesomeIcon icon={faArrowRight} />Understand Exam Pattern & Syllabus<FontAwesomeIcon icon={faArrowRight} />Build Strong Basics in Math, English & GK<FontAwesomeIcon icon={faArrowRight} />Create Study Plan<FontAwesomeIcon icon={faArrowRight} />Practice Previous Year Papers<FontAwesomeIcon icon={faArrowRight} />Take Mock Tests & Analyze Performance<FontAwesomeIcon icon={faArrowRight} />Focus on Weak Areas<FontAwesomeIcon icon={faArrowRight} />Improve Time Management<FontAwesomeIcon icon={faArrowRight} />Prepare for SSB Interview<FontAwesomeIcon icon={faArrowRight} />Stay Physically Fit<FontAwesomeIcon icon={faArrowRight} />Appear for Exam & Interview Confidently
</p>
      </div>
      <div className="roadmap-div">
        <img className="course-img" src={Ias} alt="Ias LOGO"/>
        <h2>COURSE : UPSC</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The Indian Administrative Service (IAS) exam, officially called the UPSC Civil Services Examination (CSE), is a national-level exam conducted by the Union Public Service Commission (UPSC). It selects candidates for prestigious government positions, including IAS, IPS, and IFS. The exam has three stages: Prelims, Mains, and Interview.
</p>
<p className="path-desc"><b>PATH: </b>
Meet Eligibility Criteria<FontAwesomeIcon icon={faArrowRight} />Understand Syllabus & Pattern<FontAwesomeIcon icon={faArrowRight} />Study NCERT & Standard Books<FontAwesomeIcon icon={faArrowRight} />Stay Updated on Current Affairs<FontAwesomeIcon icon={faArrowRight} />Practice Answer Writing & Mock Tests<FontAwesomeIcon icon={faArrowRight} />Revise Regularly<FontAwesomeIcon icon={faArrowRight} />Prepare for Interview<FontAwesomeIcon icon={faArrowRight} />Appear Confidently
</p>
      </div>
      <div className="roadmap-div">
        <img style={{width:"400px",height:"200px"}} className="course-img" src={Icse10} alt="ICSE LOGO"/>
        <h2>COURSE : ICSE BOARDS</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The Indian Certificate of Secondary Education (ICSE) Class 10 Board exams are conducted by the Council for the Indian School Certificate Examinations (CISCE). Known for its comprehensive and challenging curriculum, ICSE emphasizes in-depth knowledge, analytical skills, and practical understanding across subjects like English, Science, Mathematics, and Social Studies.
</p>
<p className="path-desc"><b>PATH: </b>
Conceptual Clarity<FontAwesomeIcon icon={faArrowRight} />Regular Practice<FontAwesomeIcon icon={faArrowRight} />Time Management<FontAwesomeIcon icon={faArrowRight} />Previous Year Papers<FontAwesomeIcon icon={faArrowRight} />Revision and Mock Tests<FontAwesomeIcon icon={faArrowRight} />Board Exam Performance
</p>
      </div>
      <div className="roadmap-div">
        <img style={{width:"400px",height:"200px"}} className="course-img" src={Cbse} alt="ICSE LOGO"/>
        <h2>COURSE : CBSE BOARDS</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The Central Board of Secondary Education (CBSE) is India's national-level board governed by the Ministry of Education. It offers a standardized and student-friendly curriculum, emphasizing conceptual clarity, analytical thinking, and real-world problem-solving
</p>
<p className="path-desc"><b>PATH: </b>
NCERT Proficiency<FontAwesomeIcon icon={faArrowRight} />Objective Learning<FontAwesomeIcon icon={faArrowRight} />Sample Papers Practice<FontAwesomeIcon icon={faArrowRight} />Time Management<FontAwesomeIcon icon={faArrowRight} />Thorough Revision<FontAwesomeIcon icon={faArrowRight} />Exam Success
</p>
      </div>
    </nav>
    )
}
export default Roadmap