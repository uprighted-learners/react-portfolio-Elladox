import aboutImg from "../images/aboutImg.jpg";

function About(props) {
  return (
    /* image for the about page */
    <div id="aboutBody">
      <img src={aboutImg} alt="A picture of me on the 4th of July"></img>
      <p id="aboutText">
        I am a fullstack software developer based in the Burlington Vermont
        Area.
        <br></br>
        Born and raised in New England I have love learning and a serious
        determination to always strive to be my best self.
        <br></br>
        As a programmer I love bringing people's ideas to life through the
        wonders of code
        <br></br>
        My hobbies and interests include Minature Wargaming, Magic the Gathering
        and the eternal study of History
      </p>
    </div>
  );
}
export default About;
