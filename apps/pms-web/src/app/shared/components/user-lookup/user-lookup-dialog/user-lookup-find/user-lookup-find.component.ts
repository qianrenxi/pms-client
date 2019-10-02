import { Component, OnInit } from '@angular/core';
import { UGS } from '../../../user-group-lookup/user-group-lookup-dialog/ug.data';

@Component({
  selector: 'pms-user-lookup-find',
  templateUrl: './user-lookup-find.component.html',
  styleUrls: ['./user-lookup-find.component.scss']
})
export class UserLookupFindComponent implements OnInit {

  nodes = UGS;

  columns = [
    {title: '用户名'},
    {title: '姓名'},
    {title: '邮箱'},
    {title: '所属组织'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
