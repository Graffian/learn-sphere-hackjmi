import styles from "./Roadmap.css"
import JeeMain from "../Images/JeeMain.webp"
import Nda from "../Images/nda.png"
import Neet from "../Images/Neet.png"
import Ias from "../Images/Ias.jpeg"
function Roadmap(){
  return(
    <nav className="roadmap-wrapper">
      <div className="roadmap-div">
        <img className="course-img" src={JeeMain} alt="JEE MAIN LOGO"/>
        <h2>COURSE : JEE MAIN</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
JEE Main is a national-level entrance exam in India for admission to top engineering colleges like NITs, IIITs, and CFTIs. It also serves as a qualifying exam for JEE Advanced, required for admission to IITs.
</p>
<p className="path-desc"><b>PATH: </b>Understand Syllabus & Pattern ➡ Create Study Plan ➡ Master NCERT Concepts ➡ Solve Previous Year Papers ➡ Take Mock Tests ➡ Analyze & Improve ➡ Focus on Weak Areas ➡ Revise Regularly ➡ Practice Time Management ➡ Stay Confident</p>
      </div>
      
      
      <div className="roadmap-div">
        <img className="course-img" src={Neet} alt="JEE MAIN LOGO"/>
        <h2>COURSE : NEET</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The National Eligibility cum Entrance Test (NEET) is a national-level entrance exam in India for admission to undergraduate medical courses (MBBS, BDS, and AYUSH) in government and private medical colleges. It consists of Physics, Chemistry, and Biology sections with a total of 720 marks</p>
<p className="path-desc"><b>PATH: </b>Understand Meet Eligibility Criteria ➡ Understand Exam Pattern & Syllabus ➡ Master NCERT for Biology, Physics & Chemistry ➡ Create Study Plan with Daily Targets ➡ Practice Previous Year Papers & Mock Tests ➡ Analyze Mistakes & Improve Weak Areas ➡ Revise Regularly ➡ Focus on Time Management & Accuracy ➡ Stay Consistent & Confident ➡ Appear for Exam Confidently</p>
      </div>
      
      
      <div className="roadmap-div">
        <img className="course-img" src={Nda} alt="NDA LOGO"/>
        <h2>COURSE : NDA</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The NDA exam, conducted by UPSC, selects candidates for the Army, Navy, and Air Force wings of the National Defence Academy. It includes Mathematics and General Ability Test (GAT) papers
</p>
<p className="path-desc"><b>PATH: </b>
Meet Eligibility Criteria ➡ Understand Exam Pattern & Syllabus ➡ Build Strong Basics in Math, English & GK ➡ Create Study Plan ➡ Practice Previous Year Papers ➡ Take Mock Tests & Analyze Performance ➡ Focus on Weak Areas ➡ Improve Time Management ➡ Prepare for SSB Interview ➡ Stay Physically Fit ➡ Appear for Exam & Interview Confidently
</p>
      </div>
      <div className="roadmap-div">
        <img className="course-img" src={Ias} alt="Ias LOGO"/>
        <h2>COURSE : NDA</h2>
        <p className="course-desc"><b>DESCRIPTION: </b>
The Indian Administrative Service (IAS) exam, officially called the UPSC Civil Services Examination (CSE), is a national-level exam conducted by the Union Public Service Commission (UPSC). It selects candidates for prestigious government positions, including IAS, IPS, and IFS. The exam has three stages: Prelims, Mains, and Interview.
</p>
<p className="path-desc"><b>PATH: </b>
Meet Eligibility Criteria ➡ Understand Syllabus & Pattern ➡ Study NCERT & Standard Books ➡ Stay Updated on Current Affairs ➡ Practice Answer Writing & Mock Tests ➡ Revise Regularly ➡ Prepare for Interview ➡ Appear Confidently
</p>
      </div>
    </nav>
    )
}
export default Roadmap