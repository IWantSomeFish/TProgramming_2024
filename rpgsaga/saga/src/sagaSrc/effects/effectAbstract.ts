import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

abstract class Effect {
  readonly name: string;
  readonly discription: string;
  protected _duration: number;
  protected _effectType: elements;
  readonly effectTarget: effectTarget;
  protected _isApplied: boolean;
  get getEffectTarget(): effectTarget {
    return this.effectTarget;
  }
  get getEffectType(): elements {
    return this._effectType;
  }
  get getDuration(): number {
    return this._duration;
  }
  get isApplied(): boolean {
    return this._isApplied;
  }
  abstract useEffect();
  abstract effectEnd();
  reduceDuration(): void {
    this._duration = this._duration - 1;
  }
  effectDiscription() {
    console.log(this.name);
    console.log(this.discription);
  }
  endImmidially() {
    this._duration = -1;
  }
}
export default Effect;
