import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KitchenSharedModule } from '../../shared';

import { PROFILE_ROUTE, UserProfileComponent } from './';

@NgModule({
    imports: [
        KitchenSharedModule,
        RouterModule.forChild([ PROFILE_ROUTE ])
    ],
    declarations: [
        UserProfileComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class KitchenUserProfileModule {}
