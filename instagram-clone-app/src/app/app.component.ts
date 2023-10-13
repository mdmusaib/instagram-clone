import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  submitted = false;
  working = false;
  complete = true;
  strongPassword = false;
  loginScreen = false;
  registerScreen = false;
  showProfile = false;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    password: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
  });


  signupForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    crmPassword: new FormControl(null, [
      Validators.required,
    ]),
    fullName: new FormControl(null, [Validators.required]),
    phone: new FormControl(null),
    email: new FormControl(null, [Validators.email]),
  });

  get f() {
    return this.signupForm.controls;
  }

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }
  checkPassword = (event: any) => {
    if (this.signupForm.controls['password'].value != event.target.value) {
      this.signupForm.controls['crmPassword'].setErrors({ 'incorrect': true });
      this.signupForm.controls['crmPassword'].markAsDirty();
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.working = true;

    setTimeout(() => {
      this.signupForm.reset();
      this.working = false;
      this.complete = false;
      this.registerScreen = false;
      this.loginScreen = true;
      this.showProfile = true;
    }, 1000);
  }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }


    setTimeout(() => {
      this.loginForm.reset();
      this.loginScreen = true;
      this.complete = false;
    }, 1000);
  }

  showRegisterScreen(param: any) {
    if (param) {
      this.registerScreen = true;
      this.loginScreen = true;
      this.complete = true;
    } else {
      this.registerScreen = false;
      this.loginScreen = false;
    }


  }

}
