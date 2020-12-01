interface Rect {
  readonly id: string
  color?: string // необязательное поле
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1',
  size: {
    width: 20,
    height: 30,
  },
  color: '#333'
}

const rect2: Rect = {
  id: '2',
  size: {
    width: 10,
    height: 20,
  }
}

rect2.color = '#eee'
// rect2.id = '333' READ ONLY PROPERTY

// const rect5: Rect = {} NOT WORKING
const rect3 = {} as Rect
const rect4 = <Rect>{}


// ======================
// Наследование интерфейсов
interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '3',
  size: {
    width: 15,
    height: 5,
  },

  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==============
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// ================
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
}