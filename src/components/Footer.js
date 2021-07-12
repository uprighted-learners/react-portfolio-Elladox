
/* import images from the images folder */
import Linkedin from "../images/Linkedin.png";
import Github from "../images/Github.png";

function Footer(props) {
  return (
    <div id="pageFoot">|
    {/* small logos linkning to my socials */}
    {/* I have not updated my linkedin in eons, so its not very useful at the moment */}
      <a href="https://www.linkedin.com/in/william-rotch-iii-809b5698/">
        <img className="footerLogo" src={Linkedin} alt="Linkedin Logo" />
      </a>
      {/* link to my github page. Need to update my with all the other projects */}
      <a href="https://github.com/Elladox">
        <img className="footerLogo" src={Github} alt="Github Logo"></img>
      </a>
      {/* copyright info */}
      <p>Placeholder for copyright info</p>
      
    </div>
  );
}
export default Footer;
