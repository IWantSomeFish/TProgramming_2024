import knight from "../../character/knight";
import Fabric from "../fabricAbstract";
import knightWeaponFabric from "../weaponFabrics/knightWeaponFabric";

class knightFabric extends Fabric{
    private weaponFabric = new knightWeaponFabric;
    private knightNames: string[] = ['Harald', 'Robin', 'Fernando'];
    
    createKnight(): knight{
        const knightHP = this.createRandomNuber(10, 20);
        const knightName = this.knightNames[this.createRandomNuber(0, this.knightNames.length - 1)];
        const knightWeapon = this.weaponFabric.createWeapon();
        const knightArmor = this.aromorfabric.createArmor('knight');
        return new knight(knightName, knightHP, knightWeapon, knightArmor);
    }
}
export default knightFabric;