import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BaseContentOverviewComponent} from './base-content-overview/base-content-overview.component';
import {BusOverviewComponent} from './bus/bus-overview/bus-overview.component';
import {BustypeOverviewComponent} from './bustype/bustype-overview/bustype-overview.component';
import {TripOverviewComponent} from './trip/trip-overview/trip-overview.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'base', component: BaseContentOverviewComponent},
  {path: 'base/bus', component: BusOverviewComponent},
  {path: 'base/bustype', component: BustypeOverviewComponent},
  {path: 'base/trip', component: TripOverviewComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
