import fireball from '../../../ability/weapon/specialAbility/mage/fireball';
import iceSpike from '../../../ability/weapon/specialAbility/mage/iceSpike';
import weaponAbility from '../../../enums/abilityNames';
import fabric from '../../fabricAbstract';

class MageWaf extends fabric {
  createAbility() {
    const abilityNames: weaponAbility[] = [weaponAbility.fireBall, weaponAbility.iceSpike];
    switch (abilityNames[this.createRandomNuber(0, abilityNames.length - 1)]) {
      case weaponAbility.fireBall:
        return new fireball();
      case weaponAbility.iceSpike:
        return new iceSpike();
    }
  }
}
export default MageWaf;
