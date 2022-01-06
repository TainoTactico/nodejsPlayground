//variables
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
side = 0;

readline.question('What is the length of one of the sides of the square?', input => {
    side = input;
    //capture user input
    //side = 8;

    //calculate square area
    area = side * side;

    //output area
    console.log("Area of the square is: " + area);
    readline.close();
});
