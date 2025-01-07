import fireball from '../../../ability/weapon/specialAbility/mage/fireball';
import iceSpike from '../../../ability/weapon/specialAbility/mage/iceSpike';
import WeaponAbility from '../../../enums/abilityNames';
import fabric from '../../fabricAbstract';

class mageWAF extends fabric {
  createAbility() {
    const abilityNames: WeaponAbility[] = [WeaponAbility.fireBall, WeaponAbility.iceSpike];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case WeaponAbility.fireBall:
        return new fireball();
      case WeaponAbility.iceSpike:
        return new iceSpike();
    }
  }
}
export default mageWAF;
