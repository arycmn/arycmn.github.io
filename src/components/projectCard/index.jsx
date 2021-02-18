import { Container } from "./style";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Container>
      <img src={project.img} alt="project img" width="200px" />
      {project.nome}
      <Link to={`/saiba-mais/${project.id}`}>Saiba mais</Link>
    </Container>
  );
};

export default ProjectCard;
