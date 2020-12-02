const arrayOfNumbers: Array<number> = [1, 2, 3, 5, 125, 623, 23626, 32236, 6]
const arrayOfStrings: Array<string> = ['Hello', 'Nikita']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)