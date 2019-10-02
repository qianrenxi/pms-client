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

  constructor(public readonly layoutService: DefaultLayoutService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarCollapsed();
  }
}
