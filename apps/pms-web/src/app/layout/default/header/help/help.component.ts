import { Component, OnInit } from '@angular/core';
import { HelpDialogService } from '@qimooc/console/shared';

@Component({
  selector: 'pms-header-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(
    public readonly helpDialogService: HelpDialogService
  ) { }

  ngOnInit() {
  }

}
