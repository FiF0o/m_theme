/** globals */
let symbol = window.symbol;
window.symbolSize = 48;

/** canvas definition */
class Symbol {
  constructor(x, y, speed, isFirst, opacity) {
    this._x = x
    this._y = y
    this._speed = speed
    this._isFirst = isFirst
    this._opacity = opacity
    this._switchInterval = 2
    this.value;
  }
  
  setRandomSymbol() {
    // Katakana from 0 - 96 unicode chars - U+30x
    return this.value = String.fromCharCode(0x30A0 + Math.round(0, 96))
  }
  
  render() {
    fill(0, 255, 70)
    text(this.value, this._x, this._y)
  }
}


symbol = new Symbol(
  window.innerWidth / 2,
  window.innerHeight / 2
)

/**
 * p5
 */
function setup() {
  window.createCanvas(window.innerWidth, window.innerHeight)
  background(0)
  symbol.setRandomSymbol()
  textSize(symbolSize)
}

function draw() {
  symbol.render()
}