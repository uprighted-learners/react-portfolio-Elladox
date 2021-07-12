function Projects(props) {
  return (
    /* each project is a flexbox containing an image and a description */
    <div className="bodyContainer">
      <div className="projectContainer">
        {/* image links to github repository */}
        <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Elladox">
          <img
          /* currently a placeholder image for the projects */
            src="https://placekitten.com/250/250"
            alt="Random Number Guesser"
          />
        </a>
        {/* description for what the project is */}
        <p>Random Number Guesser</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/zorkington-Elladox">
          <img
            src="https://placekitten.com/250/250"
            alt="Text based adventure"
          />
        </a>
        <p>Text Based Adventure</p>
      </div>
      <div className="projectContainer">
        <a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-Elladox">
          <img src="https://placekitten.com/250/250" alt="Tic-Tac-Toe" />
        </a>
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="projectContainer">
        <img src="https://placekitten.com/250/250" alt="placeholder for future project"/>
        <p>this is a project description</p>
      </div>
    </div>
  );
}
export default Projects;
