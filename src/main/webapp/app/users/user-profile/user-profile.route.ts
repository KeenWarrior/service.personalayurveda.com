import { Route } from '@angular/router';

import { UserProfileComponent } from './';

export const PROFILE_ROUTE: Route = {
    path: 'p',
    component: UserProfileComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
