export const randomCharFunction: any = {
  UpperCase: getRandomUpperCase,
  LowerCase: getRandomLowerCase,
  Symbols: getRandomSymbol,
  Numbers: getRandomNumber,
};

export function getRandomUpperCase(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpperCase());

export function getRandomLowerCase(): String {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLowerCase());

export function getRandomNumber(): String {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumber());

export function getRandomSymbol(): String {
  const Symbols: String = "!@#$%^&*()_+-=|}{[]/<>,.~";
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}

console.log(getRandomSymbol());

export function generatePassword(value: any) {
  let passwordObj: Object = {};
  for (const key of Object.keys(value)) {
    if (typeof value[key] === "boolean" && value[key]) {
      passwordObj = {
        ...passwordObj,
        [key]: value[key],
      };
    }
  }
  return passwordObj;
}

export function generatedPassword(passwordObj: Object, passwordSize: Number) {
let finalPassword = ''
for (let i = 0; i < Number(passwordSize); i += Object.keys(passwordObj).length) {
    if(passwordObj.lowerCase) finalPassword += `${getRandomLowerCase()}`
    if(passwordObj.upperCase) finalPassword += `${getRandomUpperCase()}`
    if(passwordObj.numbers) finalPassword += `${getRandomNumber()}`
    if(passwordObj.symbols) finalPassword += `${getRandomSymbol()}`
    
}
console.log(finalPassword)
return finalPassword;
}



// export const generatePassword = (upper: String, lower: String, number: Number, symber: String, size: Number) => {
// let generatedPassword: String = ''
// const typesArray = [{upper}, {lower}, {number}, {symber}].filter((item) => Object.values(item)[0])

// for (let i = 0; i < size; i += typesArray) {
//     typesArray.forEach(type => {
//         const funcName = Object.keys(type)[0];
//         generatedPassword += randomCharFunction[funcName]
//     })
// }
// const finalPassword = generatedPassword.slice(0, size)

// return finalPassword;
// }
