import shieldUp from '../../ability/armor/shieldUp';
import armorAbility from '../../enums/armorAbility';
import fabric from '../fabricAbstract';

class ArmorAf extends fabric {
  createAbility() {
    const abilityNames: armorAbility[] = [armorAbility.ShieldUp];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      //   case armorAbility.changeElement:
      //     return new changeType();
      case armorAbility.ShieldUp:
        return new shieldUp();
    }
  }
}
export default ArmorAf;
