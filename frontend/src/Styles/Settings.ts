import styled from "styled-components";

export const SettingContainer = styled.div``;

export const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export const Lable = styled.label``;

export const InputLength = styled.input.attrs({
  type: "number",
  id: "length",
  min: "8",
  max: "20",
  value: "20",
})`


`;

export const CheckboxSetting = styled(Setting)``;

export const CheckboxInput = styled.input.attrs({
  type: "checkbox",
  id: "length",
  min: "8",
  max: "20",
  value: "20",
})``;
