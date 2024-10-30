import Armor from './armorInterface';

class KnightArmor extends Armor {
  constructor(name: string, baseDefence: number, elementDefType: string) {
    super(name, baseDefence, elementDefType);
  }

  shieldUp() {
    this.changeDefence(10);
  }
}

export default KnightArmor;
