import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    background-color: #190d46;
    width: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const ProjectCard = styled.div`
  width: 50%;
  img {
    margin: 0 auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
    margin: 10px;
    transition: 0.4s;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  a:hover {
    color: #d0fefe;
    font-size: 1.3rem;
  }
`;
