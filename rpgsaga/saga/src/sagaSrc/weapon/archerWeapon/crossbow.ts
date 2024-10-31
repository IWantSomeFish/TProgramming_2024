import archerWeapon from "./archerWeapon";

class crossBow extends archerWeapon{
    specialAbility() {
        throw new Error("Method not implemented.");
    }
    constructor(name: string,damage: number,critChance: number, critMult: number,attackType: string){
        super(name,damage,critChance,critMult,attackType);
    }
}
export default crossBow;