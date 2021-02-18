import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Contact from "../pages/contact";
import SaibaMais from "../pages/saiba-mais";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/saiba-mais/:projectId">
        <SaibaMais />
      </Route>
    </Switch>
  );
};

export default Routes;
