import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    templateUrl: '../app/dashboard/dashboard.html'
})

export class DashboardComponent {
    constructor(private _router:Router){
        
    }
    
    logout() {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['Login']);
    }
}