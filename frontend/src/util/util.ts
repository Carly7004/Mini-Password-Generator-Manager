export const randomCharFunction: Object = {
    UpperCase: getRandomUpperCase,
    LowerCase: getRandomLowerCase,
    Symbols: getRandomSymbol,
    Numbers: getRandomNumber
}


export function getRandomUpperCase(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

console.log(getRandomUpperCase())


export function getRandomLowerCase(): String {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}

console.log(getRandomLowerCase())


export function getRandomNumber(): String {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

console.log(getRandomNumber())


export function getRandomSymbol(): String {
    const Symbols: String = '!@#$%^&*()_+-=|}{[]\/<>,.~';
    return Symbols[Math.floor(Math.random() * Symbols.length)]
}

console.log(getRandomSymbol())