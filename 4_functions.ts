function square(a: number): number {
  return a * a
}

function sayHello(str: string): string {
  return str.trim().toUpperCase()
}

// overload func

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined
    }
  }


  if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString()
    }
  }

  return { x: a, y: b }
}

console.log('Empty', position())
console.log('One param', position(42))
console.log('Two params', position(10, 15))
