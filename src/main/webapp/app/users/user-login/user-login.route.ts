import { Route } from '@angular/router';

import { UserLoginComponent } from './';

export const LOGIN_ROUTE: Route = {
    path: 'google',
    component: UserLoginComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    }
};
