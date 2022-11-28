export function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

console.log(getRandomUpperCase())


export function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}

console.log(getRandomLowerCase())


export function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

console.log(getRandomNumber())


export function getRandomSymbol() {
    const Symbols = '!@#$%^&*()_+-=|}{[]\/<>,.~';
    return Symbols[Math.floor(Math.random() * Symbols.length)]
}

console.log(getRandomSymbol())