import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';


const appRoutes:Routes=[
  {path:'', component:HomepageComponent},
  {path:'user-profile' , component:UserprofileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserprofileComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
