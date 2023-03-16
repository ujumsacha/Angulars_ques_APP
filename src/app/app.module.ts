import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { AuthComponent } from './login/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
