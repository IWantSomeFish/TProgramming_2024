abstract class Armor {
  abstract name: string;
  abstract baseDefence: number;
  abstract currentDefence: number;

  reduceDamage(damage: number): number{
    damage = damage - this.currentDefence
    return damage
  }
}
export default Armor;
