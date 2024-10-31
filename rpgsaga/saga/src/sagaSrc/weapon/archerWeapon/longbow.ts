import archerWeapon from "./archerWeapon";

class longbow extends archerWeapon{
    specialAbility() {
        throw new Error("Method not implemented.");
    }
    constructor(name: string,damage: number,critChance: number,critMultiplier: number,attackType: string){
        super(name,damage,critChance,critMultiplier,attackType);
    }
}
export default longbow;