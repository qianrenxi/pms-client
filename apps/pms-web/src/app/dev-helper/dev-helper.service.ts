import { Injectable, ComponentFactoryResolver, Renderer2, Inject, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HelperHandlerComponent } from './helper-handler/helper-handler.component';

@Injectable()
export class DevHelperService {

    constructor(
        private resolver: ComponentFactoryResolver,
        // private renderer: Renderer2,
        @Inject(DOCUMENT) private doc: any,
    ) { }


    createHelper(viewContainerRef: ViewContainerRef) {
        const settingFactory = this.resolver.resolveComponentFactory(HelperHandlerComponent);
        viewContainerRef.createComponent(settingFactory);
    }
}