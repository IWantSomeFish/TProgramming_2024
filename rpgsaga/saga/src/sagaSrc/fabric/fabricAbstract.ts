abstract class Fabric {
  protected createRandomNuber(min: number, max: number): number {
    const randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(0));
  }
}
export default Fabric;
