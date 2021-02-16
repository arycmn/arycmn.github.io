import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ContactList = styled.div`
  display: flex;

  div {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
