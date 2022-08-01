import {BehaviorSubject} from "rxjs";
import {IAutoBehaviorSubject} from "./IAutoBehaviorSubject";

export class AutoBehaviorSubject<T> implements IAutoBehaviorSubject<T> {
  private readonly _behaviorT: BehaviorSubject<T>;
  public get subject(): BehaviorSubject<T> { return this._behaviorT; }
  public get value(): T { return this._behaviorT.getValue(); }
  public set value(value: T) { this._behaviorT.next(value); }

  constructor(initialValue: T) {
    this._behaviorT = new BehaviorSubject<T>(initialValue);
  }
}

