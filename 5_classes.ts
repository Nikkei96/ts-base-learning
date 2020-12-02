class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: TS version: ${this.version}`
  }
}

class Car {
  readonly model: string
  readonly wheels: number = 4 // по умолчанию

  constructor(theModel: string) {
    this.model = theModel // записать значение можно лишь в конструкторе (поле readonly )
  }

}

// идентична Car1 - лаконичная запись
class Car2 {
  readonly wheels: number = 4
  constructor(readonly model: string) { }
}

// Модификаторы полей 
class Animal {
  color2: string = 'black' // по умолчинию всегда public
  public color: string = 'black' // явное указание модификатора

  protected voice: string = '' // поля доступны внутри класса и ТОЛЬКО дочерним классам

  private go() {
    console.log('go!')
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)


// Abstract class 
// Не компилируются, нужные для того, чтобы от них наследоваться

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('comp on render');
  }

  info(): string {
    return 'Hello!'
  }
}
