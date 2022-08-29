import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiService } from './inspection-api.service';
import { BikesApiService } from './bikes-api.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BikesComponent } from './bikes/bikes.component';
import { AddEditBikeComponent } from './bikes/add-edit-bike/add-edit-bike.component';

const routes: Routes = [
  { path: 'inspection', component: InspectionComponent },
  { path: 'bikes', component: BikesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    NavBarComponent,
    BikesComponent,
    AddEditBikeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InspectionApiService, BikesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
