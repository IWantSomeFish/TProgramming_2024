import Weapon from './weaponInterface';

class Sword extends Weapon {
  currentDamage: number;
  critMultiple: number;
  

  constructor(public name: string,public baseDamage: number, public critChance: number, public critmult: number) {
    super();
    this.currentDamage = baseDamage;
    this.critChance = critChance;
    this.critMultiple = critmult;
  }
}
export default Sword;
