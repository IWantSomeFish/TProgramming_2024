abstract class animal {
  protected _name: string;
  protected _age: number;
  protected _color: string;

  constructor(name: string, age: number, color: string) {
    this._name = name;
    this.age = age;
    this._color = color;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    if (value < 0) {
      throw new Error('Age is incorrect');
    } else {
      this._age = value;
    }
  }

  abstract makeSound();
  toString(): string {
    return `${this._name} with ${this._age} and its color is ${this._color}`;
  }
}
export default animal;
