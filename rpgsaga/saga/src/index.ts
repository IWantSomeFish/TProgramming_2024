import KnightArmor from './sagaSrc/armor/knightArmor';
import Sword from './sagaSrc/weapon/swordClass';

const randSword = new Sword("Dragon Slayeer",10, 20, 2);
const randArmor = new KnightArmor("Steel plate",5);
console.log(randArmor.reduceDamage(randSword.attack()));
console.log(randSword);
console.log(randArmor);
