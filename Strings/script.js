function getNumberOfChars(name) {
    // number of characters in: name
    return name.length

}

function getFirstChar(name) {
    // first character of: name
    return name.charAt(0)

}
function getLastChar(name) {
    // last character of: name
    return name.at(-1)

}
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase()
}

function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase()

}

function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()

}
console.log("")
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
});
