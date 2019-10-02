import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../../default-layout.service';

// TODO: extra it
interface HeaderInfo {
  homeUrl: string;
  logo: string;
  miniLogo: string;
  appName: string;
}

@Component({
  selector: 'pms-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  headerInfo: HeaderInfo = {
    homeUrl: '/',
    logo: '/assets/images/logo-light-2.png',
    miniLogo: 'assets/images/mini-logo.png',
    appName: '企慕课堂'
  };

  mainMenuItems = [
    { title: '我的', uri: '/my'},
    { title: '产品', uri: '/product'},
    { title: '项目', uri: '/project'},
    { title: '测试', uri: '/test'},
    { title: '文档', uri: '/doc'},
    { title: '统计', uri: '/report'},
    { title: '组织', uri: '/group'},
    { title: '反馈', uri: '/feedback'},
  ];

  constructor(public readonly layoutService: DefaultLayoutService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarCollapsed();
  }
}
