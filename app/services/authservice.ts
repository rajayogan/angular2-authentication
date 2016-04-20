import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';


@Injectable()
export class AuthService {
    isLoggedin: boolean;
    
    constructor(private _http:Http) {
        
    }
    
    loginfn(usercreds) {
        this.isLoggedin = false;
        var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        return new Promise((resolve) => {
            
        
        
        this._http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                window.localStorage.setItem('auth_key', data.json().token);
                this.isLoggedin = true;}
                resolve(this.isLoggedin)
            }
        )
        
        })
    }
    
    
}