import styled from "styled-components";
import { Button } from "./Styles";

export const ResultContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 14px 12px;
  height: 50px;
  width: 100%;
`;

export const Result = styled.input`
  word-wrap: break-word;
  max-width: calc(100% - 40px);
`;

// export const EmptySpan = styled.input``;

export const ClipboardButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
`;

export const Icon = styled.i``;
