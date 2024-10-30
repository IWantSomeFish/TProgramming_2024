import Staff from "../../weapon/mageWeapon/staffClass";
import Fabric from "../fabricAbstract";

class MageWeaponFabric extends Fabric{
    public createWeapon(){
        const damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
        const weaponTypes = ['staff','book'];
        const weaponType = weaponTypes[this.createRandomNuber(0,weaponTypes.length-1)];
        switch(weaponType){
          case 'staff':
            const staffNames = ['Staff of wizardy','Black Tree','Stop Sign'];
            const staffName = staffNames[this.createRandomNuber(0,staffNames.length-1)];
            const staffDamage = this.createRandomNuber(10,20);
            const staffAttackType = damageTypes[this.createRandomNuber(0,damageTypes.length-1)];
            return new Staff(staffName,staffDamage,staffAttackType);

        }
    }
}
export default MageWeaponFabric;