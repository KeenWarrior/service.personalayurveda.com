import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KitchenSharedModule } from '../../shared';

import { LOGIN_ROUTE, UserLoginComponent } from './';

@NgModule({
    imports: [
        KitchenSharedModule,
        RouterModule.forChild([ LOGIN_ROUTE ])
    ],
    declarations: [
        UserLoginComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KitchenUserLoginModule {}
