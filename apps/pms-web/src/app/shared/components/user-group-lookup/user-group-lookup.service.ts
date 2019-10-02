
import { Injectable } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { UserGroupLookupDialogComponent } from './user-group-lookup-dialog/user-group-lookup-dialog.component';

@Injectable({providedIn: 'root'})
export class UserGroupLookupService {
    
    constructor(
        private readonly modalService: NzModalService
    ) { }

    openLookup(): NzModalRef {
        const modalRef = this.modalService.create({
            nzTitle: '选择组织',
            nzContent: UserGroupLookupDialogComponent,
            nzWidth: 720,
            nzMaskClosable: false,
        });

        return modalRef;
    }
}