import Random from "../images/random.png";
import Zork from "../images/Zork.png";
import Tic from "../images/Tic.png";
import Marker from "../images/Marker.png";
import Chat from "../images/Chat.png";
function Projects(props) {
  return (
    /* each project is a flexbox containing an image and a description */
    <div className="bodyContainer">
      <div className="projectContainer">
        {/* image links to github repository */}
        <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Elladox">
          <img
            /* currently a placeholder image for the projects */
            src={Random}
            alt="Random Number Guesser"
            className="projectImg"
          />
        </a>
        {/* description for what the project is */}
        <p>Random Number Game</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/zorkington-Elladox">
          <img src={Zork} alt="Text based adventure" className="projectImg" />
        </a>
        <p>Text Based Adventure</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-Elladox">
          <img src={Tic} alt="Tic-Tac-Toe" className="projectImg" />
        </a>
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/yelpington-Elladox">
          {" "}
          <img src={Marker} alt="Restaurant Finder" className="projectImg" />
        </a>

        <p>Restaurant-Finder</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/chat-app-will-conor">
          <img src={Chat} alt="Chat App" className="projectImg" />
        </a>

        <p>React-Chat</p>
      </div>
    </div>
  );
}
export default Projects;
