import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { zip } from 'rxjs';

@Component({
  selector: 'pms-dashboard-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {
  notice: any[] = [];
  activities: any[] = [];
  radarData: any[];
  loading = true;

  // region: mock data
  links = [
    {
      title: '操作一',
      href: '',
    },
    {
      title: '操作二',
      href: '',
    },
    {
      title: '操作三',
      href: '',
    },
    {
      title: '操作四',
      href: '',
    },
    {
      title: '操作五',
      href: '',
    },
    {
      title: '操作六',
      href: '',
    },
  ];
  members = [
    {
      id: 'members-1',
      title: '科学搬砖组',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      link: '',
    },
    {
      id: 'members-2',
      title: '程序员日常',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      link: '',
    },
    {
      id: 'members-3',
      title: '设计天团',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      link: '',
    },
    {
      id: 'members-4',
      title: '中二少女团',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      link: '',
    },
    {
      id: 'members-5',
      title: '骗你学计算机',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      link: '',
    },
  ];
  // endregion

  constructor(private http: HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    zip(this.http.get('/api/charts'), this.http.get('/api/notice'), this.http.get('/api/activities')).subscribe(
      ([chart, notice, activities]: [any, any, any]) => {
        this.radarData = chart.radarData;
        this.notice = notice;
        this.activities = activities.map((item: any) => {
          item.template = item.template.split(/@\{([^{}]*)\}/gi).map((key: string) => {
            if (item[key]) return `<a>${item[key].name}</a>`;
            return key;
          });
          return item;
        });
        this.loading = false;
        this.cdr.detectChanges();
      },
    );
  }
}
