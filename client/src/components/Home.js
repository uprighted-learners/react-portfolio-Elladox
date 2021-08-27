import ProfilePicture from "../images/ProfilePicture.jpg";

function Home(props) {
  return (
    /* container for the body of the page */
    <div className="bodyContainer">
      {/* Profile picture to represent myself */}
      <img src={ProfilePicture} alt="A profile picture" id="profilePicture" /> |
      {/* short greeting for those coming to the page */}
      <p>
        Greetings, and thank you for taking an interest in my portfolio.
        {/* line break to format the p tag with minimal effort */}
        <br></br>
        Here you will find a collection of my work as well as a little bit about
        myself, so come on in and explore!
      </p>
    </div>
  );
}
export default Home;
