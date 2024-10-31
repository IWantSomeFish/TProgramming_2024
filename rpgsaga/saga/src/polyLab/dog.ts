import animal from './animal';

class Dog extends animal {
  constructor(name: string, age: number, color: string) {
    super(name, age, color);
  }
  makeSound(): string {
    return 'Fow-Fow!';
  }
}
export default Dog;
