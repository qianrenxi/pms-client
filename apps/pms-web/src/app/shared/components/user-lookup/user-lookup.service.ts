
import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { UserLookupDialogComponent } from './user-lookup-dialog/user-lookup-dialog.component';

@Injectable({ providedIn: 'root' })
export class UserLookupService {

    constructor(
        private readonly modalService: NzModalService
    ) { }

    openLookup(): NzModalRef {
        const modalRef = this.modalService.create({
            // nzTitle: '选择用户',
            nzContent: UserLookupDialogComponent,
            nzWidth: 1000,
            nzMaskClosable: false,
        });

        return modalRef;
    }
}