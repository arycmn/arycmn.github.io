import "./App.css";
import { StyledApp, ButtonsContainer } from "./style";
import Routes from "./Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <Routes />
      <ButtonsContainer>
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/contact">CONTACT</Link>
      </ButtonsContainer>
    </StyledApp>
  );
}

export default App;
