import axe from '../weapon/knightWeapon/axeClass';
import sword from '../weapon/knightWeapon/swordClass';

function createRandomNuber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(0));
}

class weaponFabric {
  createWeapon(type: string) {
    const damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
    switch (type) {
      case 'knight':
        const knightWeapons = ['sword', 'axe'];
        const weaponType = knightWeapons[createRandomNuber(0, knightWeapons.length - 1)];
        switch (weaponType) {
          case 'sword':
            const swordNames = ['Excalibur', 'Demon Slayer', 'Night', 'Day'];
            const swordName = swordNames[createRandomNuber(0, swordNames.length - 1)];
            const swordDamage = createRandomNuber(5, 10);
            const swordCritChance = createRandomNuber(10, 30);
            const swordCritMultiplier = createRandomNuber(10, 30) / 10;
            const swordDamageType = damageTypes[createRandomNuber(0, damageTypes.length - 1)];
            return new sword(swordName, swordDamage, swordCritChance, swordCritMultiplier, swordDamageType);

          case 'axe':
            const axeNames = ['Dual Moon', 'Axe of Gorrosh', 'Mooncrasher'];
            const axeName = axeNames[createRandomNuber(0, axeNames.length - 1)];
            const axeDamage = createRandomNuber(10, 15);
            const axeCritChance = createRandomNuber(5, 15);
            const axeCritMultipluer = createRandomNuber(5, 15);
            const axeDamageType = damageTypes[createRandomNuber(0, damageTypes.length - 1)];
            return new axe(axeName, axeDamage, axeCritChance, axeCritMultipluer, axeDamageType);
        }
    }
  }
}

export default weaponFabric;
