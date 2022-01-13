const { Command } = require('commander');
const program = new Command();

//Functions of the program.
function calcArea(base, height, type){
    if(type == "triangle"){
        return ((base * height) / 2);
    }
    else if(type == "rectangle"){
        return (base * height);
    }
    else {return ("undefined")}
}
program
    .version('version: 0.1.1')

program
    .command('rectangle')
    .description('Calculate the area of a rectangle')
    .option('-b, --base <number>', 'Base of the rectangle')
    .option('-h, --height <number>', 'Height of the rectangle')
    .action((options) => {
        area = calcArea(options.base, options.height, "rectangle");
        console.log('The area of the rectangle is: %s ', area);
    });

program
    .command('triangle')
    .description('Calculate the area of a triangle')
    .option('-b, --base <number>', 'Base of the triangle')
    .option('-h, --height <number>', 'Height of the triangle')
    .action((options) => {
        area = calcArea(options.base, options.height, "triangle");
        console.log('The area of the triangle is: %s ', area);
    });

program.parse(process.argv);
