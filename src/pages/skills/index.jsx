import { Container, NewSkill, SkillContainer } from "./style";
import { SkillsList } from "../../data/skills";

const Skills = () => {
  return (
    <Container>
      <h2>Certified Skills</h2>
      <SkillContainer>
        {SkillsList.filter((skill) => skill.nivel === 100).map(
          (skill, index) => (
            <NewSkill key={index}>
              <img src={skill.icon} alt={skill.nome} />
              {skill.nome}
            </NewSkill>
          )
        )}
      </SkillContainer>
      <h2>Skills under Construction</h2>
      <SkillContainer>
        {SkillsList.filter((skill) => skill.nivel < 100).map((skill, index) => (
          <NewSkill key={index}>
            <img src={skill.icon} alt={skill.nome} />
            {skill.nome}
          </NewSkill>
        ))}
      </SkillContainer>
    </Container>
  );
};

export default Skills;
