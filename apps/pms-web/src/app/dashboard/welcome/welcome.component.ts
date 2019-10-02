import { Component, OnInit, Inject, LOCALE_ID, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GUIDE_COURSES } from './guide-courses.data';
import { FLOWS } from './flows.data';

@Component({
  selector: 'pms-dashboard-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  todoData: any[];
  webSite: any[];
  salesData: any[];
  offlineChartData: any[];

  guideCourses = GUIDE_COURSES;

  flows = FLOWS;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.http.get('/api/todos').subscribe((result: any) => {
      this.todoData = result;
    });

    this.http.get('/api/charts').subscribe((res: any) => {
      this.webSite = res.visitData.slice(0, 10);
      this.salesData = res.salesData;
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }

}
