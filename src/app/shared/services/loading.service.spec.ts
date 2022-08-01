import {TestBed} from '@angular/core/testing';
import {AutoBehaviorSubject} from "../utilities/AutoBehaviorSubject";

describe('AutoBehaviorSubjectTests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('Setting Value', () => {
    const autoBehaviorSubject = new AutoBehaviorSubject<boolean>(false);

    autoBehaviorSubject.value = true;
    expect(autoBehaviorSubject.value).toBe(true);
  });

  it('Observable Works', () => {
    const autoSubject = new AutoBehaviorSubject<boolean>(false);

    let value = false;
    const observable = autoSubject
      .subject
      .subscribe((v: boolean) => value = v);

    autoSubject.value = true;
    observable.unsubscribe()

    expect(autoSubject.value).toBe(value);
  });
});
