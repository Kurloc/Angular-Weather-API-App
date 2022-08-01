import { Injectable } from '@angular/core';
import {AutoBehaviorSubject} from "../utilities/AutoBehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingProgressWheel = new AutoBehaviorSubject(false);
  public loadingProgressBar = new AutoBehaviorSubject(false);

  constructor() { }
}
