
import { Route, Switch } from "react-router";
import FourOhFour from "./FourOhFour";
import AboutTitle from "./HeaderTitles/AboutTitle";
import ContactTitle from "./HeaderTitles/ContactTitle";
import HomeTitle from "./HeaderTitles/HomeTitle";
import ProjectTitle from "./HeaderTitles/ProjectsTitle";
import WorkTitle from "./HeaderTitles/WorkTitle";
function Header(props) {
  return (
    <div>
      {/* switch to control what the title is based on what page the user is on   */}
      <Switch>
        <Route exact path="/" component={HomeTitle} />
        <Route path="/Contact" component={ContactTitle} />
        <Route path="/About" component={AboutTitle} />
        <Route path="/Projects" component={ProjectTitle} />
        <Route path="/Work-History" component={WorkTitle} />
        <Route path="*" component={FourOhFour} />
      </Switch>
    </div>
  );
}
export default Header;
