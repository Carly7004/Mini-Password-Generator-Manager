import React from "react";
import {
  ClipboardButton,
  Icon,
  Result,
  ResultContainer,
} from "./Styles/Result";
import {
  CheckboxInput,
  CheckboxSetting,
  InputLength,
  Lable,
  Setting,
  SettingContainer,
} from "./Styles/Settings";
import {
  ButtonContainer,
  Container,
  GenerateButton,
  SaveButton,
  Title,
} from "./Styles/Styles";

type Props = {};

const MainApp = (props: Props) => {
  return (
    <Container>
      <Title>Mini Password Generator Manager</Title>
      <ResultContainer>
        <Result></Result>
        <ClipboardButton>
          <Icon className="far fa-clipboard"></Icon>
        </ClipboardButton>
      </ResultContainer>
      <SettingContainer>
        <Setting>
          <Lable>Password Length</Lable>
          <InputLength className="appearance-none rounded-lg px-1"/>
        </Setting>
        <CheckboxSetting>
          <Lable>UpperCase Laters</Lable>
          <CheckboxInput checked />
        </CheckboxSetting>
        <CheckboxSetting>
          <Lable>LowerCase Laters</Lable>
          <CheckboxInput checked />
        </CheckboxSetting>
        <CheckboxSetting>
          <Lable>Numbers</Lable>
          <CheckboxInput checked />
        </CheckboxSetting>
        <CheckboxSetting>
          <Lable>Symbols</Lable>
          <CheckboxInput checked />
        </CheckboxSetting>
      </SettingContainer>
      <ButtonContainer>
        <GenerateButton>Generate Password</GenerateButton>
        <SaveButton>Save</SaveButton>
      </ButtonContainer>
    </Container>
  );
};

export default MainApp;
