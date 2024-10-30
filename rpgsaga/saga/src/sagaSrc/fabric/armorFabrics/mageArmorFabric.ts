import MageArmor from "../../armor/mageArmor";
import Fabric from "../fabricAbstract";

class mageArmorFabric extends Fabric{
    private armorNames = ['Robe of magic','Hoodie','Hood','Cape of void'];
    private damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
    public createArmor(): MageArmor {
        const armorName = this.armorNames[this.createRandomNuber(0, this.armorNames.length - 1)];
        const defence = this.createRandomNuber(5, 10);
        const defenceType = this.damageTypes[this.createRandomNuber(0, this.damageTypes.length - 1)];
        return new MageArmor(armorName, defence, defenceType);
}}
export default mageArmorFabric;