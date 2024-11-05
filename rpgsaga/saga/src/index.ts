import characterFabric from './sagaSrc/fabric/charactersFabrics/characterFabric';
import staff from './sagaSrc/weapon/mageWeapon/staffClass';
import animal from './polyLab/animal';
import cat from './polyLab/cat';
import dog from './polyLab/dog';

const randCat = new cat('Barsik', 5, 'White');
const randDog = new dog('Sharik', 10, 'Black');
const animalArray: animal[] = [randCat, randDog];
for (let i = 0; i < animalArray.length; i++) {
  console.log(animalArray[i].makeSound());
  console.log(animalArray[i].toString());
}
const fabric = new characterFabric();
const char = fabric.createChar('mage');
const randstaff = new staff('Staff', 10, 'fire');
console.log(char);
console.log(randstaff);
randstaff.specialAbility(char);
console.log(char);
