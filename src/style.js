import styled from "styled-components";
import bgDev from "./assets/images/bgDev.jpg";

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: repeat-y;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7)
    ),
    url(${bgDev});
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: 0.4s;
    color: white;
    text-decoration: none;
    padding: 2%;
    font-weight: bolder;
  }
  a:hover {
    color: #d0fefe;
    font-size: 1.3rem;
  }
`;
