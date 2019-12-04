import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusOverviewComponent } from './bus-overview/bus-overview.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusFormComponent } from './bus-form/bus-form.component';
import { BaseContentOverviewComponent } from './base-content-overview/base-content-overview.component';
import { BustypeOverviewComponent } from './bustype-overview/bustype-overview.component';
import { BustypeListComponent } from './bustype-list/bustype-list.component';
import { BustypeFormComponent } from './bustype-form/bustype-form.component';
import {MatCardModule, MatTableModule} from '@angular/material';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BustypeDetailComponent } from './bustype-detail/bustype-detail.component';
import { HttpClientModule } from '@angular/common/http';

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
    BustypeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
