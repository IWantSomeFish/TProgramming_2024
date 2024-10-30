interface Weapon {
  attack();
  changeDamage(value: number): void;
  multiplyDamage(value: number): void;
  setDamageDefault(): void;
}
export default Weapon;
