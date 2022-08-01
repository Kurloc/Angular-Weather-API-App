import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../../components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
