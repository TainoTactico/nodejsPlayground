const { Command } = require('commander');
const program = new Command();

program
    .version('version: 0.1')

program
    .command('rectangle')
    .description('Calculate the area of a rectangle')
    .option('-b, --base <number>', 'Base of the rectangle')
    .option('-h, --height <number>', 'Height of the rectangle')
    .action((options) => {
        area = (options.base * options.height);
        console.log('The area of the rectangle is: %s ', area);
    });

program
    .command('triangle')
    .description('Calculate the area of a triangle')
    .option('-b, --base <number>', 'Base of the triangle')
    .option('-h, --height <number>', 'Height of the triangle')
    .action((options) => {
        area = (options.base * options.height) / 2;
        console.log('The area of the triangle is: %s ', area);
    });

program.parse(process.argv);
