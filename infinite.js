var number1 = '0';
var author1 = '-';
var number2 = '1';
var author2 = '-';
var number3 = '2';
var author3 = '-';
var number4 = '3';
var author4 = '-';
var number5 = '4';
var author5 = '-';
var number6 = '5';
var author6 = '-';
var number7 = '6';
var author7 = '-';
var number8 = '7';
var author8 = '-';
var number9 = '8';
var author9 = '-';

var numberArray = [number1, number2, number3, number4, number5, number6, number7, number8, number9];
var authorArray = [author1, author2, author3, author4, author5, author6, author7, author8, author9];

var number = document.getElementById('number');
var author = document.getElementById('author');

number.innerHTML = numberArray[0];
author.innerHTML = authorArray[0];

var previousButton = document.getElementById('previous-button');
var nextButton = document.getElementById('next-button');

var i = 0;

function previous (event) {
    if (i === 0) {
        number.innerHTML = numberArray[5];
        author.innerHTML = authorArray[5];
        i = 5;
    }
    else if (i === 1) {
        number.innerHTML = numberArray[0];
        author.innerHTML = authorArray[0];
        i = 0;
    }
    else if (i === 2) {
        number.innerHTML = numberArray[1];
        author.innerHTML = authorArray[1];
        i = 1;
    }
    else if (i === 3) {
        number.innerHTML = numberArray[2];
        author.innerHTML = authorArray[2];
        i = 2;
    }
    else if (i === 4) {
        number.innerHTML = numberArray[3];
        author.innerHTML = authorArray[3];
        i = 3;
    }
    else if (i === 5) {
        number.innerHTML = numberArray[4];
        author.innerHTML = authorArray[4];
        i = 4;
    }
}

function next (event) {
    if (i === 0) {
        number.innerHTML = numberArray[1];
        author.innerHTML = authorArray[1];
        i = 1;
    }
    else if (i === 1) {
        number.innerHTML = numberArray[2];
        author.innerHTML = authorArray[2];
        i = 2;
    }
    else if (i === 2) {
        number.innerHTML = numberArray[3];
        author.innerHTML = authorArray[3];
        i = 3;
    }
    else if (i === 3) {
        number.innerHTML = numberArray[4];
        author.innerHTML = authorArray[4];
        i = 4;
    }
    else if (i === 4) {
        number.innerHTML = numberArray[5];
        author.innerHTML = authorArray[5];
        i = 5;
    }
    else if (i === 5) {
        number.innerHTML = numberArray[6];
        author.innerHTML = authorArray[6];
        i = 6;
    }
    else if (i === 6) {
        number.innerHTML = numberArray[7];
        author.innerHTML = authorArray[7];
        i = 7;
    }
    else if (i === 7) {
        number.innerHTML = numberArray[8];
        author.innerHTML = authorArray[8];
        i = 8;
    }
    else if (i === 8) {
        number.innerHTML = numberArray[1];
        author.innerHTML = authorArray[1];
        i = 1;
    }
}

setInterval(next, 800);

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);