const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

var romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
];

function checkInput() {
    const number = parseInt(userInput.value);

    if (isNaN(number)) {
        output.style.display = 'block';
        output.textContent = "Please enter a valid number";
        return
    }
    else if (number <= 0) {
        output.style.display = 'block';
        output.textContent = "Please enter a number greater than or equal to 1";
        return
    }
    else if (number >= 4000) {
        output.style.display = 'block';
        output.textContent = "Please enter a number less than or equal to 3999";
        return
    }
    else { return convertToRoman(number) }
}

function convertToRoman(number) {
    var result = '';
    for (var i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            number -= romanNumerals[i].value;
        }
    }
    output.style.display = 'block';
    output.textContent = result;
}

convertBtn.addEventListener('click', checkInput);