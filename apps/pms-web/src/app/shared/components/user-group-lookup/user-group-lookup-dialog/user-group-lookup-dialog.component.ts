import { Component, OnInit } from '@angular/core';
import { UGS } from './ug.data';

@Component({
  selector: 'pms-user-group-lookup-dialog',
  templateUrl: './user-group-lookup-dialog.component.html',
  styleUrls: ['./user-group-lookup-dialog.component.scss']
})
export class UserGroupLookupDialogComponent implements OnInit {

  nodes = UGS;

  mode = 'tree'; // 'tree' | 'list'

  selection = [
    {id: 10001, name: '天津市' },
    {id: 10001, name: '北京市' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
