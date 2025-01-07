import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

abstract class effect {
  readonly _name: string;
  readonly _discription: string;
  protected _duration: number;
  protected _effectType: Elements;
  readonly _effectTarget: effectTarget;
  protected _isApplied: boolean;
  get getEffectTarget(): effectTarget {
    return this._effectTarget;
  }
  get getEffectType(): Elements {
    return this._effectType;
  }
  get getDuration(): number {
    return this._duration;
  }
  get isApplied(): boolean {
    return this._isApplied;
  }
  abstract useEffect(): any;
  abstract effectEnd(): any;
  reduceDuration(): void {
    this._duration = this._duration - 1;
  }
  effectDiscription() {
    console.log(this._name);
    console.log(this._discription);
  }
  endImmidially() {
    this._duration = -1;
  }
}
export default effect;
