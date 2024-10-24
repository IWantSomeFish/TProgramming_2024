import Armor from "./armorInterface";

class KnightArmor extends Armor{
    currentDefence: number;

    constructor(public name: string,public baseDefence: number){
        super();
        this.currentDefence = baseDefence;
    }
}

export default KnightArmor