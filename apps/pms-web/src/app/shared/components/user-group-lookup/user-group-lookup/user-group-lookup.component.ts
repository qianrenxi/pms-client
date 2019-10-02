import { Component, OnInit, Renderer2, ElementRef, Input, HostBinding, TemplateRef, HostListener } from '@angular/core';
import { zoomMotion, NzModalRef } from 'ng-zorro-antd';
import * as _ from 'lodash';
import { UserGroupLookupService } from '../user-group-lookup.service';

@Component({
  selector: 'pms-user-group-lookup',
  animations: [zoomMotion],
  templateUrl: './user-group-lookup.component.html',
  styleUrls: ['./user-group-lookup.component.scss']
})
export class UserGroupLookupComponent implements OnInit {

  @Input() isMultiple: boolean = false;
  @Input() allowClear: boolean;
  @Input() size: 'large' | 'small';
  @Input() maxTagCount: number;
  @Input() maxTagPlaceholder: TemplateRef<{$implicit: any[]}>;
  @Input() placeholder: string = "请选择组织";

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  private _disabled: boolean;

  value;

  selectedNodes: any[] = [];

  private _modalRef: NzModalRef;


  @HostBinding('class.ant-select-enabled')
  get bindEnabledStyleClass() {
    return !this.disabled;
  }

  @HostBinding('class.ant-select-disabled')
  get bindDisabledStyleClass() {
    return this.disabled;
  }

  @HostBinding('class.ant-select-allow-clear')
  get bindAllowClearStyleClass() {
    return this.allowClear;
  }

  @HostBinding('class.ant-select-lg')
  get bindLgSizeStyleClass() {
    return this.size === 'large';
  }

  @HostBinding('class.ant-select-sm')
  get bindSmSizeStyleClass() {
    return this.size === 'small';
  }

  get isEmpty(): boolean {
    // return _.isEmpty(this.value);
    return _.isEmpty(this.selectedNodes);
  }


  @HostListener("click")
  onClick() {
    console.log('clicked')
    this._openLookupDialog();
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private userGroupLookupService: UserGroupLookupService
  ) {
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
  }

  ngOnInit() {
  }

  displayWith(item?: any) {
    return '北京市';
  }

  trackNode(_index: number, item: any) {
    return item.key;
  }

  private _openLookupDialog() {
    if (this.disabled || (!!this._modalRef)) {
      return;
    }
    const modalRef = this._modalRef = this.userGroupLookupService.openLookup();
    modalRef.afterClose.subscribe(() => {
      this._modalRef = null;
    });
  }
}
