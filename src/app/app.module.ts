import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusOverviewComponent} from './bus-overview/bus-overview.component';
import {BusListComponent} from './bus-list/bus-list.component';
import {BusFormComponent} from './bus-form/bus-form.component';
import {BaseContentOverviewComponent} from './base-content-overview/base-content-overview.component';
import {BustypeOverviewComponent} from './bustype-overview/bustype-overview.component';
import {BustypeListComponent} from './bustype-list/bustype-list.component';
import {BustypeFormComponent} from './bustype-form/bustype-form.component';
import {MatCardModule, MatTableModule} from '@angular/material';
import {BusDetailComponent} from './bus-detail/bus-detail.component';
import {BustypeDetailComponent} from './bustype-detail/bustype-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {NavigationComponent} from './navigation/navigation.component';
import {TimetableComponent} from './timetable/timetable.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { FormButtonComponent } from './form-button/form-button.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    BusOverviewComponent,
    BusListComponent,
    BusFormComponent,
    BaseContentOverviewComponent,
    BustypeOverviewComponent,
    BustypeListComponent,
    BustypeFormComponent,
    BusDetailComponent,
    BustypeDetailComponent,
    NavigationComponent,
    TimetableComponent,
    HomeComponent,
    NotFoundComponent,
    FormButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
