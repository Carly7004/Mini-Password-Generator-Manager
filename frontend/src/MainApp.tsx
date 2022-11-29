import React, { useState } from "react";
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
import { generatePassword } from "./util/util";

type Props = {
  generatedPassword: string;
  passwordSize: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const MainApp = (props: Props) => {
  const [value, setValue] = useState({
    generatedPassword: "",
    passwordSize: 20,
    upperCase: true,
    lowerCase: true,
    numbers: false,
    symbols: false,
  });

  const settingUpdate = (e: any) => {
    setValue({
      ...value,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    console.log(value);
  };


  function generatePassword() {
    const passwordObj = generatePassword(value)
    const finalPassword = generatePassword(passwordObj, value.passwordSize)
    console.log(finalPassword);
  }

  return (
    <>
      <pre>{JSON.stringify(value)}</pre>
      <Container>
        <Title>Mini Password Generator Manager</Title>
        <ResultContainer>
          <Result
            name="generatedPassword"
            readOnly
            placeholder="min of 8 character"
            value={value.generatedPassword}
          />
          <ClipboardButton>
            <Icon className="far fa-clipboard"></Icon>
          </ClipboardButton>
        </ResultContainer>
        <SettingContainer>
          <Setting>
            <Lable>Password Length</Lable>
            <InputLength
              name="passwordSize"
              value={value.passwordSize}
              onChange={settingUpdate}
              className="appearance-none px-1"
            />
          </Setting>
          <CheckboxSetting>
            <Lable>UpperCase Laters</Lable>
            <CheckboxInput
              name="upperCase"
              onChange={settingUpdate}
              checked={value.upperCase}
            />
          </CheckboxSetting>
          <CheckboxSetting>
            <Lable>LowerCase Laters</Lable>
            <CheckboxInput
              name="lowerCase"
              checked={value.lowerCase}
              onChange={settingUpdate}
            />
          </CheckboxSetting>
          <CheckboxSetting>
            <Lable>Numbers</Lable>
            <CheckboxInput
              name="numbers"
              checked={value.numbers}
              onChange={settingUpdate}
            />
          </CheckboxSetting>
          <CheckboxSetting>
            <Lable>Symbols</Lable>
            <CheckboxInput
              name="symbols"
              checked={value.symbols}
              onChange={settingUpdate}
            />
          </CheckboxSetting>
        </SettingContainer>
        <ButtonContainer>
          <GenerateButton onClick={generatePassword}>Generate Password</GenerateButton>
          <SaveButton>Save</SaveButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default MainApp;
