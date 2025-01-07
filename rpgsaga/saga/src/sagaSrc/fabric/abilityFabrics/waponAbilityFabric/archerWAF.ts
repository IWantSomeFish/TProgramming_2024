import shackle from '../../../ability/weapon/specialAbility/archer/shackle';
import WeaponAbility from '../../../enums/abilityNames';
import fabric from '../../fabricAbstract';

class archerWAF extends fabric {
  createAbility() {
    const abilityNames = [WeaponAbility.shackle, WeaponAbility.powerShot];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case WeaponAbility.shackle:
        return new shackle();
    }
  }
}
export default archerWAF;
