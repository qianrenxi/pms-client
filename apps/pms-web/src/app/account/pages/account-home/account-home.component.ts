import { Component, OnInit, OnDestroy } from '@angular/core';
import { DefaultLayoutService } from '@qianrenxi/pms/layout';

@Component({
  selector: 'pms-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit, OnDestroy {

  private _preSidebarStates: any;

  constructor(
    private readonly layoutService: DefaultLayoutService
  ) { }

  ngOnInit() {
    this._preSidebarStates = this.layoutService.sidebarCollapsed;
    this.layoutService.collapseSidebar();
  }

  ngOnDestroy() {
    if (!this._preSidebarStates) {
      this.layoutService.expandSidebar();
    }
  }

}
