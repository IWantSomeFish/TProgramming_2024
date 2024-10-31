import Character from "../character/characterAbstract";

interface Weapon {
  attack(target: Character);
  changeDamage(value: number): void;
  multiplyDamage(value: number): void;
  setDamageDefault(): void;
  specialAbility(target: Character): any;
}
export default Weapon;
