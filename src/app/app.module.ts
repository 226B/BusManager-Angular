import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusOverviewComponent} from './bus/bus-overview/bus-overview.component';
import {BusListComponent} from './bus/bus-list/bus-list.component';
import {BusFormComponent} from './bus/bus-form/bus-form.component';
import {BaseContentOverviewComponent} from './base-content-overview/base-content-overview.component';
import {BustypeOverviewComponent} from './bustype/bustype-overview/bustype-overview.component';
import {BustypeListComponent} from './bustype/bustype-list/bustype-list.component';
import {BustypeFormComponent} from './bustype/bustype-form/bustype-form.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {BusDetailComponent} from './bus/bus-detail/bus-detail.component';
import {BustypeDetailComponent} from './bustype/bustype-detail/bustype-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {TimetableComponent} from './timetable/timetable.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageCardComponent } from './page-card/page-card.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { TripOverviewComponent } from './trip/trip-overview/trip-overview.component';
import { TripFormComponent } from './trip/trip-form/trip-form.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';



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
    TimetableComponent,
    HomeComponent,
    NotFoundComponent,
    PageCardComponent,
    TripOverviewComponent,
    TripFormComponent
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
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    BrowserModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [MatDialogConfig],
  bootstrap: [AppComponent],
  entryComponents: [BusFormComponent, BustypeFormComponent, TripFormComponent]
})
export class AppModule {
}
