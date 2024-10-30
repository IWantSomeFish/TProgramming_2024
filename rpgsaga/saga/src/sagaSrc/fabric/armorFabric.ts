import knightArmor from '../armor/knightArmor';

function createRandomNuber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(0));
}

class ArmorFabric {
  private armorNames = ['Steel Plate', 'Black rock', 'Vail of night', 'Daybreaker'];
  private damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
  createArmor(type: string) {
    switch (type) {
      case 'knight':
        const weaponName = this.armorNames[createRandomNuber(0, this.armorNames.length - 1)];
        const armorDefence = createRandomNuber(5, 10);
        const damageType = this.damageTypes[createRandomNuber(0, this.damageTypes.length - 1)];
        return new knightArmor(weaponName, armorDefence, damageType);
    }
  }
}

export default ArmorFabric;
