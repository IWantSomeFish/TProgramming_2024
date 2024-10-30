import KnightArmor from "../../armor/knightArmor";
import Fabric from "../fabricAbstract";

class knightArmorFabric extends Fabric{
    private armorNames = ['Steel Plate', 'Black rock', 'Vail of night', 'Daybreaker'];
    private damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
    public createArmor(): KnightArmor {
        const armorName = this.armorNames[this.createRandomNuber(0, this.armorNames.length - 1)];
        const defence = this.createRandomNuber(5, 10);
        const defenceType = this.damageTypes[this.createRandomNuber(0, this.damageTypes.length - 1)];
        return new KnightArmor(armorName, defence, defenceType);
}}
export default knightArmorFabric;