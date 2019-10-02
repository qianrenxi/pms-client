import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  // TODO: 同步的账户信息部分字段不允许编辑，哪怕编辑了也会被覆盖回去。

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    const form = this.fb.group({
      username: [],
      name: [],
      sex: [],
      validity: [], // Translate
      startDate: [],
      endDate: [],
      userGroup: [],
      phoneNumber: [],
      email: [],
    });

    this.form = form;
  }

  _submitForm($e, value) {

  }
}
