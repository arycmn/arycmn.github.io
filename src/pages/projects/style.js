import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: #190d46;
    width: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 50px;
  }
`;
