const isFetching: boolean = true
const isLoading: boolean = false

const integer: number = 24
const float: number = 24.3
const e: number = 2e1

const message: string = 'Hello'

const numArray: number[] = [1, 2, 3, 3, 4, 5]
const numArray2: Array<number> = [1, 2, 3, 3, 4, 5] // generic type

const words: string[] = ['asf', 'sagf']
const words2: Array<string> = ['asf', 'sagf']

const concat: [string, number] = ['a', 2] //tuple

// ANY TYPE
let variable: any = 42
variable = 'Hello'


// ======
function syMyName(name: string): void {
  console.log(name)
}
syMyName('Никита')

// Never
function throwError(message: string): never {
  throwError(message)
}

function allWork(): never {
  while (true) {
    console.log(1)
  }
}

// Custom types
type user = string // it`s alias (for usability)
const user1: user = 'Nikita'

type id = number | string
const id1: id = 123
const id2: id = '123'

// primitives types
type someType = null | undefined