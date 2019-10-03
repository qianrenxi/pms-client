import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '@qianrenxi/pms/layout';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class PmsMyComponent implements OnInit {

  constructor(
    private readonly layoutService: DefaultLayoutService
  ) { }

  ngOnInit() {
    this.layoutService.setSidebarMenus([
      {
        "text": "工作台",
        "link": "./workplace",
      },
      {
        "text": "日程",
        "link": "./",
      },
      {
        "text": "任务",
        "link": "./",
      },
      {
        "text": "Bug",
        "link": "./",
      },
      {
        "text": "测试",
        "link": "./",
      },
      {
        "text": "需求",
        "link": "./",
      },
      {
        "text": "项目",
        "link": "./",
      },
      {
        "text": "动态",
        "link": "./",
      },
      {
        "text": "档案",
        "link": "./",
      },
      {
        "text": "积分",
        "link": "./",
      },
      {
        "text": "联系人",
        "link": "./",
      },
    ]);
  }

}
