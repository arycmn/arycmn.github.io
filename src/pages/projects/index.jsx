import { Container } from "./style";
import { projectsArray } from "../../data/projects";

import ProjectList from "../../components/projectsList";

const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <ProjectList ProjectArray={projectsArray} />
    </Container>
  );
};

export default Projects;
