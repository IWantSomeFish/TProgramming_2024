import shackle from '../../../ability/weapon/specialAbility/archer/shackle';
import weaponAbility from '../../../enums/abilityNames';
import fabric from '../../fabricAbstract';

class ArcherWAF extends fabric {
  createAbility() {
    const abilityNames = [weaponAbility.shackle, weaponAbility.powerShot];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case weaponAbility.shackle:
        return new shackle();
    }
  }
}
export default ArcherWAF;
