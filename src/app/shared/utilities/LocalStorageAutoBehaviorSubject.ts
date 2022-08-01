import {BehaviorSubject} from "rxjs";
import {IAutoBehaviorSubject} from "./IAutoBehaviorSubject";

export class LocalStorageAutoBehaviorSubject<T> implements IAutoBehaviorSubject<T> {
  private readonly _storageKey: string;
  private readonly _behaviorT: BehaviorSubject<T>;

  public get subject(): BehaviorSubject<T> {
    return this._behaviorT;
  }

  public get value(): T {
    return this._behaviorT.getValue();
  }

  public set value(value: T) {
    this._behaviorT.next(value);
    this.saveToStorage();
  }

  constructor(storageKey: string, initValue?: T) {
    this._storageKey = storageKey;
    this._behaviorT = new BehaviorSubject<T>(initValue ? initValue : {} as T);
    this.value = this.loadFromStorage();
  }

  public loadFromStorage(): T {
    const value = localStorage.getItem(this._storageKey);
    if (value) {
      return JSON.parse(value) as T;
    } else {
      return {} as T;
    }
  }

  public saveToStorage(): void {
    localStorage.setItem(this._storageKey, JSON.stringify(this.value));
  }
}
