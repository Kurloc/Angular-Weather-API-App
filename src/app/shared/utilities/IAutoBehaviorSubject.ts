import {BehaviorSubject} from "rxjs";

export interface IAutoBehaviorSubject<T> {
  subject: BehaviorSubject<T>;
  get value(): T;
  set value(value: T);
}
