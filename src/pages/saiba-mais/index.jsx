import { Container, ProjectCard, LinkContainer } from "./style";
import { useParams } from "react-router-dom";
import { projectsArray } from "../../data/projects";

const SaibaMais = () => {
  let { projectId } = useParams();

  return (
    <Container>
      {projectsArray
        .filter((projeto) => projeto.id.toString() === projectId)
        .map((projeto, index) => (
          <ProjectCard key={index}>
            <h1>{projeto.nome}</h1>
            <img src={projeto.img} alt={projeto.nome} width="200" />
            <h2>Descrição:</h2>
            <p>{projeto.descricao}</p>
            <h2>Tecnologias: </h2>
            <p>{projeto.tecnologias}</p>
            <LinkContainer>
              <a href={projeto.url}>Repositório</a>
              <a href={projeto.deploy}>Deploy</a>
            </LinkContainer>
          </ProjectCard>
        ))}
    </Container>
  );
};

export default SaibaMais;
