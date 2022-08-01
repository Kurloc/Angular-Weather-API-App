import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./shared/modules/weather/weather.module').then(m => m.WeatherModule),
    data: {
      title: 'Weather Home'
    }
  },
  {
    path: '**',
    loadChildren: () => import('./shared/modules/weather/weather.module').then(m => m.WeatherModule),
    data: {
      title: 'Weather Home'
    }
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
