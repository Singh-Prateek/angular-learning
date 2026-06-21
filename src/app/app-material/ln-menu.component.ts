import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';

@Component({
    selector: 'ln-menu',
    template: `<ng-content></ng-content>`,
    // styleUrls: ['./ln-menu.component.scss'],
    hostDirectives: [CdkMenu],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class LnMenuComponent {

}
@Component({
    selector: 'ln-menu-item',
    template: `<button><ng-content></ng-content></button>`,
    // styleUrls: ['./ln-menu.component.scss'],
    hostDirectives: [CdkMenuItem],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class LnMenuItemComponent {

}
