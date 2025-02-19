const numbers = Array(10).fill('').map((x, i) => i);
const SmallCaseLetters = Array(26).fill('').map((x, i) => String.fromCharCode(97 + i));
const UpperCaseLetters = Array(26).fill('').map((x, i) => String.fromCharCode(65 + i));

function generateRandomCode(limit) {
    const allArr = [...numbers, ...SmallCaseLetters, ...UpperCaseLetters];
    let html = "JI-";
    for (let i = 0; i < limit; i++) {
        html += allArr[Math.floor(1 + (allArr.length-1) * Math.random())];
    }
    return html;
}

export { generateRandomCode }