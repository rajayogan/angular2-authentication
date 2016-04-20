import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthCheck} from './authcheck';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [AuthCheck]
})

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
export class AppComponent { }
