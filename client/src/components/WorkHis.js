import Resume from "../files/William Rotch Resume.pdf";
import { Link } from "react-router-dom";
function WorkHis(props) {
  return (
    <div id="workContainer">
      <div id="careerContainer">
       
        <h1>Career Goals</h1>
        <p> To be the very best like no one ever was</p>
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h1>Employment History</h1>
        <p>
          Starbucks,Boston, MA Aug 2017 – July 2019, Starbucks Burlington, VT
          July 2019-2021
        </p>
        <Link id="resumeLink" to={Resume} target="_blank" download>
          Download My Resume
        </Link>
      </div>
    </div>
  );
}
export default WorkHis;
