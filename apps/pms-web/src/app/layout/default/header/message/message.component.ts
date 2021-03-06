import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NOTICES, MESSAGES } from './message-data';

@Component({
  selector: 'pms-header-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  loading: boolean = false;

  notices = [];
  messages = [];

  constructor(
    // private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.notices = NOTICES;
      this.messages = MESSAGES;
    }, 1000);

    // this.cdr.markForCheck();
  }

}
