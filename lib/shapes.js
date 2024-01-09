// class Shape {
// 	constructor(shapeColor) {
// 	  this.shapeColor = shapeColor;
// 	}
//   }

class Shape{
	constructor(shapeColor){this.shapeColor=shapeColor}
}

class Circle extends Shape {
    render(){
		return `<circle cx="50" cy="50" r="50"  fill="${this.shapeColor}" />`
    }}

class Square extends Shape {
	render(){
		return `<rect width="100" height="100" fill="${this.shapeColor}" />`
	}}
	
class Triangle extends Shape {
	render(){
		return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />`
	}}

	

//class circle extends shape
//render()

{/* <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />

<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />

		    <polygon points="250,60 100,400 400,400" class="triangle" /> */}

module.exports = {Circle, Triangle, Square};