import { Directive, ViewContainerRef, AfterViewInit, NgZone } from '@angular/core';

import { DevHelperService } from './dev-helper.service';
import { environment } from '../../environments/environment';

@Directive({
  selector: 'pms-dev-helper-outlet, [pmsDevHelperOutlet]'
})
export class DevHelperOutletDirective implements AfterViewInit {


  get enabled() {
    return !environment.production;
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly devHelperService: DevHelperService,
    private readonly ngZone: NgZone,
  ) { }

  ngAfterViewInit() {
    if (this.enabled) {
      setTimeout(() => {
        this.devHelperService.createHelper(this.viewContainerRef);
      }, 25);
    }
  }
}
