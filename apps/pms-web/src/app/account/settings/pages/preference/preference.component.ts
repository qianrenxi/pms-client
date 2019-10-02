import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pms-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  form: FormGroup;

  languageOptions = [
    {label: '简体中文', value: 'zh-CN'},
    {label: 'English', value: 'en-US'},
  ];

  roleOptions = [
    {label: '学员', value: 'learner'},
    {label: '教员', value: 'teacher'},
    {label: '管理员', value: 'administrator'},
  ];

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    const form = this.fb.group({
      language: [],
      defaultRole: [],
      defaultManageGroup: []
    });

    this.form = form;
  }

  _submitForm($e, value) {}
}
