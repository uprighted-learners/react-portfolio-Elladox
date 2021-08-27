import ProfilePicture from "../images/ProfilePicture.jpg"

function Home(props) {
  return (
    <div className="bodyContainer">
      <img src={ProfilePicture} alt="A profile picture" id="profilePicture"/>{" "}
      <p>Greetings, and thank you for taking an interest in my portfolio.
<br></br>
        Here you will find a collection of my work as well as a little bit about myself, so come on in and explore! 
      </p>
      
    </div>
  );
}
export default Home;
