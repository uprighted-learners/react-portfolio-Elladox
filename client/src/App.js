import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FourOhFour from "./components/FourOhFour";
import Projects from "./components/Projects";
import WorkHis from "./components/WorkHis";
import Footer from "./components/Footer";
function App() {
  return (
    /* set up browserrouter to facilitate react-router */
    <BrowserRouter>
      {/* Header components remain consistent on all pages */}
      <div id="pageHead">
        <Header />
        <Nav />
      </div>
      <div id="pageBody">
        {/* Switch allows control over what components render based on the current path of the user */}
        <Switch>
          {/* each component has a few html elements and is conditionally rendered with the Route tags*/}
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Work-History" component={WorkHis} />
          <Route path="*" component={FourOhFour} />
        </Switch>
      </div>
      {/* footer also remains consistent */}
      <Footer />
    </BrowserRouter>
  );
}
/* make sure to export everything to the index */
export default App;
