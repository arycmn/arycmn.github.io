import { Container } from "./style";
import ProjectCard from "../projectCard";
import { projectsArray } from "../../data/projects";

const ProjectList = ({ ProjectArray }) => {
  console.log(projectsArray);
  return (
    <Container>
      {ProjectArray.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Container>
  );
};

export default ProjectList;
