import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;

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
