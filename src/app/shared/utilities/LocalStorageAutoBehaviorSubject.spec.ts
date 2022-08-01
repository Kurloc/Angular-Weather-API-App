import {TestBed} from '@angular/core/testing';
import {LocalStorageAutoBehaviorSubject} from "./LocalStorageAutoBehaviorSubject";

describe('AutoBehaviorSubjectTests', () => {
  const storageKey = 'test';
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('Setting Value', () => {
    const localStorageAutoBehaviorSubject = new LocalStorageAutoBehaviorSubject<boolean>(storageKey);

    localStorageAutoBehaviorSubject.value = true;
    expect(localStorageAutoBehaviorSubject.value).toBe(true);
  });

  it('Observable Works', () => {
    const localStorageAutoBehaviorSubject = new LocalStorageAutoBehaviorSubject<boolean>(storageKey);

    let value = false;
    const observable = localStorageAutoBehaviorSubject
      .subject
      .subscribe(v => {
        value = v;
      });

    localStorageAutoBehaviorSubject.value = true;
    observable.unsubscribe()

    expect(localStorageAutoBehaviorSubject.value).toBe(value);
  });

  it('LocalStorage Works', () => {
    const autoSubject = new LocalStorageAutoBehaviorSubject<string>(storageKey);

    let value = "";
    const observable = autoSubject
      .subject
      .subscribe(v => {
        value = v;
      });

    autoSubject.value = "test string!!!";
    observable.unsubscribe()

    const autoSubjectTwo = new LocalStorageAutoBehaviorSubject<string>(storageKey);
    expect(autoSubjectTwo.value).toBe(value);
    console.log("A: " + autoSubject.value, "B: " + autoSubjectTwo.value);
  });
});
