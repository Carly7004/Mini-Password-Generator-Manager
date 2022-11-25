import styled from "styled-components";

export const Container = styled.div`
  background-color: #23232a;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  min-width: 100%;
`;

export const Title = styled.h2`
  margin: 10px 0 20px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
  background-color: #3b3b99;
  color: #fff !important;
  font-size: 16px;
  padding: 8px 10px;
  cursor: pointer;
`;

export const GenerateButton = styled(Button)`
  width: 50%;
`;

export const SaveButton = styled(Button)`
  width: 40%;
`;
