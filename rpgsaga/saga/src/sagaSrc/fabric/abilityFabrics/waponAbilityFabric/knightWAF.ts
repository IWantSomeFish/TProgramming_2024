import holyStrike from '../../../ability/weapon/specialAbility/knight/holyStrike';
import fabric from '../../fabricAbstract';
import weaponAbility from '../../../enums/abilityNames';

class KnightWaf extends fabric {
  public createAbility() {
    const abilityNames = [weaponAbility.holyStrike];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case weaponAbility.holyStrike:
        return new holyStrike();
      //   case WeaponAbility.fireBlade:
      //     return new fireBlade();
    }
  }
}
export default KnightWaf;
