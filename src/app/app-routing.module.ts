import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BaseContentOverviewComponent} from './base-content-overview/base-content-overview.component';
import {BustypeFormComponent} from './bustype-form/bustype-form.component';
import {BusFormComponent} from './bus-form/bus-form.component';
import {BusDetailComponent} from './bus-detail/bus-detail.component';
import {BustypeDetailComponent} from './bustype-detail/bustype-detail.component';
import {BusOverviewComponent} from './bus-overview/bus-overview.component';
import {BustypeOverviewComponent} from './bustype-overview/bustype-overview.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'base', component: BaseContentOverviewComponent},
  {path: 'base/bus', component: BusOverviewComponent},
  {path: 'base/bustype', component: BustypeOverviewComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
