import { Component, OnInit } from '@angular/core';

import { DefaultLayoutService } from '@qianrenxi/pms/layout';


@Component({
    template: '<router-outlet></router-outlet>'
})
export class DashboardComponent implements OnInit {

    constructor(
        private layoutService: DefaultLayoutService
    ) { }

    ngOnInit() { 
        this.layoutService.setSidebarMenus([
            {
                "text": "仪表盘",
                "i18n": "menu.dashboard",
                "icon": "anticon-dashboard",
                "group": true,
                "children": [
                    {
                        "text": "仪表盘V1",
                        "link": "/dashboard/v1",
                        "i18n": "menu.dashboard.v1"
                    },
                    {
                        "text": "分析页",
                        "link": "/dashboard/analysis",
                        "i18n": "menu.dashboard.analysis"
                    },
                    {
                        "text": "监控页",
                        "link": "/dashboard/monitor",
                        "i18n": "menu.dashboard.monitor"
                    },
                    {
                        "text": "工作台",
                        "link": "/dashboard/workplace",
                        "i18n": "menu.dashboard.workplace"
                    }
                ]
            },
            {
                "text": "快捷菜单",
                "i18n": "menu.shortcut",
                "icon": "anticon-rocket",
                "shortcutRoot": true,
                "children": [
                    {
                        "text": "快捷菜单1",
                        "link": "/dashboard/workplace",
                        "i18n": "menu.form.basicform"
                    },
                    {
                        "text": "快捷菜单2",
                        "link": "/dashboard/workplace",
                        "i18n": "menu.form.stepform"
                    },
                ],
                "group": true,
            },
        ]);
    }

}