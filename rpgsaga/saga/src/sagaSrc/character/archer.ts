import archerWeapon from "../weapon/archerWeapon/archerWeapon";
import Character from "./characterAbstract";

class archer extends Character{
    constructor(name: string,maxHP:number,armor:archerArmor,weapon: archerWeapon){
        super(name,maxHP,armor,weapon);
    }
}
export default archer;