import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';

@Component({
    selector: 'ln-menu',
    template: `<ng-content></ng-content>`,
    hostDirectives: [CdkMenu],
    standalone: true
})
export class LnMenuComponent {

}
@Component({
    selector: 'ln-menu-item',
    template: `<button><ng-content></ng-content></button>`,
    hostDirectives: [CdkMenuItem],
    standalone: true
})
export class LnMenuItemComponent {

}
