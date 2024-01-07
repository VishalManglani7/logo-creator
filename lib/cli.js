const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes')
const {SVG} = require('./svg')
const {writeFile} = require('fs/promises'); 

//inquirer prompts for user
class CLI {
    run() {
        return inquirer 
        .prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text. (3 char max)",
                validate: (text) => 
                text.length <=  3 || "must contain 3 characters or less."
            }, 
            {
                name: "textColor",
                type: "input",
                message: "Enter a text color",
            },
            {
                name: "logoShape",
                type: "list",
                message: "select the shape",
                choices: ["circle", "square", "triangle"]
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color"
            }
        ])
        .then(({ text, textColor, logoShape, shapeColor }) => {
            let shape;
//switch that selects shape user choose and uses the shapeColor as paramater
            switch (logoShape) {
                case "circle":
                    shape = new Circle(shapeColor);
                    break;
                case "square":
                    shape = new Square(shapeColor);
                    break;
                case "triangle":
                    shape = new Triangle(shapeColor);
                    break;
            }
           //writefile
            const svg = new SVG()
            svg.setText(text,textColor)
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render())
        });
    }
}

module.exports = CLI; 