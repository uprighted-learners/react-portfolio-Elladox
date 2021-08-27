import Resume from "../files/William Rotch Resume.pdf";
import { Link } from "react-router-dom";
function WorkHis(props) {
  return (
    /* container for the work history page */
    <div id="workContainer">
      <div id="careerContainer">
        {/* list of different career goals */}
        <h1>Career Goals</h1>
        <p>
          To expand my code knowledge and experience through hard work and
          dedicated effort
        </p>
        {/* list of skills */}
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        {/* list of employment history */}
        <h1>Employment History</h1>
        <p>
          Starbucks,Boston, MA Aug 2017 – July 2019, Starbucks Burlington, VT
          July 2019-2021
        </p>
        {/* link to download a pdf resume */}
        {/* use the download prop to flag it as a download link */}
        <Link id="resumeLink" to={Resume} target="_blank" download>
          Download My Resume
        </Link>
      </div>
    </div>
  );
}
export default WorkHis;
