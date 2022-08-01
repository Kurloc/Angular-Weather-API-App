import {Component} from '@angular/core';
import {LoadingService} from "./shared/services/loading.service";
import {AutoBehaviorSubject} from "./shared/utilities/AutoBehaviorSubject";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public loadingProgressWheel: AutoBehaviorSubject<boolean>;
  public loadingProgressBar: AutoBehaviorSubject<boolean>;
  public drawerState: "open" | "closed" = "closed";

  constructor(private loadingService: LoadingService, public router: Router) {
    this.title = 'interview-project'
    this.loadingProgressWheel = this.loadingService.loadingProgressWheel;
    this.loadingProgressBar = this.loadingService.loadingProgressBar;

    if (!environment.weatherApiKey?.length || environment.weatherApiKey.length === 0)
      alert("Weather API Key is not set in environment.ts. The application will not run without this.");
  }

  public toggleSidebar() {
    this.drawerState = this.drawerState === "open"
      ? "closed"
      : "open";
  }
}
