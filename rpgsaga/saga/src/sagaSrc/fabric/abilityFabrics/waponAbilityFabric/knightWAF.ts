import holyStrike from '../../../ability/weapon/specialAbility/knight/holyStrike';
import fabric from '../../fabricAbstract';
import WeaponAbility from '../../../enums/abilityNames';
import fireBlade from '../../../ability/weapon/specialAbility/knight/fireBlade';

class knightWAF extends fabric {
  public createAbility() {
    const abilityNames = [WeaponAbility.holyStrike];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case WeaponAbility.holyStrike:
        return new holyStrike();
      case WeaponAbility.fireBlade:
        return new fireBlade();
    }
  }
}
export default knightWAF;
