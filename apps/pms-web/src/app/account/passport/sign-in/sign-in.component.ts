import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'pms-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  http;
  event;
  msg;
  open;

  selectedIndex: number = 0;
  forms: FormGroup[];

  form: FormGroup;
  error: {
    base: string,
    phone: string
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this._createLoginForm();
  }

  // #region fields

  get username() {
    return (<FormGroup>this.form.get('base')).controls.username;
  }

  get password() {
    return (<FormGroup>this.form.get('base')).controls.password;
  }

  get phoneNumber() {
    return (<FormGroup>this.form.get('phone')).controls.phoneNumber;
  }

  get authCode() {
    return (<FormGroup>this.form.get('phone')).controls.authCode;
  }

  get captcha() {
    return this.form.controls.captcha;
  }

  get rememberMe() {
    return this.form.controls.captcha;
  }

  ngOnInit() {
    
  }

  private _createLoginForm() {
    const baseForm = this.fb.group({
      username: [],
      password: [],
    });

    const phoneForm = this.fb.group({
      phoneNumber: [],
      authCode: []
    });

    const form = this.fb.group({
      base: baseForm,
      phone: phoneForm,
      captcha: [],
      rememberMe: [],
    });

    this.forms = [baseForm, phoneForm];

    this.form = form;
  }

  _submitForm($event, formValue) {
    // console.log(formValue);
    const signInData = this.forms[this.selectedIndex].value;
    this.authService.signIn(signInData);
  }
}
