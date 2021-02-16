import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;
export const SkillContainer = styled.div`
  display: flex;
`;

export const NewSkill = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;
