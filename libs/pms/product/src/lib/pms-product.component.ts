import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '@qianrenxi/pms/layout';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class PmsProductComponent implements OnInit {

  constructor(
    private readonly layoutService: DefaultLayoutService
  ) { }

  ngOnInit() {
    this.layoutService.setSidebarMenus([
      {
        "text": "系统管理",
        "link": "/admin/system",
        "i18n": "menu.admin.system"
      },
    ]);
  }

}
