abstract class Weapon {
  abstract name: string;
  abstract baseDamage: number;
  abstract currentDamage: number;
  abstract critChance: number;
  abstract critMultiple: number;

  attack(): number {
    if (Math.random() * 100 <= this.critChance) {
      return this.currentDamage * this.critMultiple;
    } else {
      return this.currentDamage;
    }
  }
}
export default Weapon;
