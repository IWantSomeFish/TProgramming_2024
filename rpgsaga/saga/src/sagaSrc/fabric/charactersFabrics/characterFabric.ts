import knightFabric from './knightFabric';
import mageFabric from './mageFabric';

class CharacterFabric {
  private knightFabric = new knightFabric;
  private mageFabric = new mageFabric;
  public createChar(type: string) {
    switch (type) {
      case 'knight':
        return this.knightFabric.createKnight();

      case 'mage':
        return this.mageFabric.createMage();
    }
  }
}
export default CharacterFabric;
