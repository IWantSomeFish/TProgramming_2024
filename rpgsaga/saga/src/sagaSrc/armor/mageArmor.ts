import Armor from './armorInterface';

class MageArmor extends Armor {
  constructor(name: string, baseDefence: number, defType: string) {
    super(name, baseDefence, defType);
  }
  changeDefType(newType: string) {
    this._elementDefType = newType;
  }
}
export default MageArmor;
