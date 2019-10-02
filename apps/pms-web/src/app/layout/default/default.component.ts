import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../default-layout.service';

@Component({
  selector: 'pms-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

  constructor(public readonly layoutServcie: DefaultLayoutService) { }

  ngOnInit() {
  }

}
