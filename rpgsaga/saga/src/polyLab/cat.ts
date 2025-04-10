import animal from './animal';

class Cat extends animal {
  constructor(name: string, age: number, color: string) {
    super(name, age, color);
  }
  makeSound(): string {
    return 'Meow';
  }
}
export default Cat;
