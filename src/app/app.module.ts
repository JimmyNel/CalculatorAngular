import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { ErrorComponent } from './error/error.component';

const ROUTES:Routes =[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'calculatrice', component:CalculatriceComponent},
  {path:'**', component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatriceComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

