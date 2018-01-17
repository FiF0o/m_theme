/** */
class Symbol {
  constructor(x, y, speed, isFirst, opacity) {
    this._x = x
    this._y = y
    this._speed = speed;
    this._isFirst = isFirst;
    this._opacity = opacity;
    this._switchInterval = 2
  }

  setRandomSymbol() {
    return Math.random()
  }
}

const s = new Symbol(1, 2, 3, false, .5)
const d = s.setRandomSymbol()


/**
 * p5
 */
function setup() {
}

function draw() {
  background(0)
  ellipse(50, 50, 80, 80);
}