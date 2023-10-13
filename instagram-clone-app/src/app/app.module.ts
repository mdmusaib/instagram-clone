import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { InstagramUI } from './components/instagram-ui/instagram-ui.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import appRoutes from './components/router-config';

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent, InstagramUI, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)
    , ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
