class SVG {
    constructor(){this.textEL="",this.shapeEL=""}
    render(){return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEL}${this.textEL}</svg>`}
    setText(text,color){this.textEL=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`}
    setShape(shape){this.shapeEL=shape.render()}
}

module.exports = SVG