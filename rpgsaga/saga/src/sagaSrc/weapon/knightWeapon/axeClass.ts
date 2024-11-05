import KnightWeapon from './knightWeapon';

class Axe extends KnightWeapon {
  specialAbility() {
      throw new Error('Method not implemented.');
  }
  constructor(
    public name: string,
    baseDamage: number,
    critChance: number,
    critmult: number,
    attackType: string,
  ) {
    super(name, baseDamage, critChance, critmult, attackType);
  }
}
export default Axe;
