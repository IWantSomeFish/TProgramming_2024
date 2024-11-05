import CharacterFabric from './sagaSrc/fabric/charactersFabrics/characterFabric';
import Staff from './sagaSrc/weapon/mageWeapon/staffClass';
import animal from './polyLab/animal';
import Cat from './polyLab/cat';
import Dog from './polyLab/dog';

const randCat = new Cat('Barsik', 5, 'White');
const randDog = new Dog('Sharik', 10, 'Black');
const animalArray: animal[] = [randCat, randDog];
for (let i = 0; i < animalArray.length; i++) {
  console.log(animalArray[i].makeSound());
  console.log(animalArray[i].toString());
}
const fabric = new CharacterFabric();
const char = fabric.createChar('mage');
const randstaff = new Staff('Staff', 10, 'fire');
console.log(char);
console.log(randstaff);
randstaff.specialAbility(char);
console.log(char);

