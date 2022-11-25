import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
   *{
       box-sizing:border-box;
   }
   #root {
    background-color: #3b3b99;
    color: #fff;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    padding: 10px;
    margin: 0;
   }
`;
