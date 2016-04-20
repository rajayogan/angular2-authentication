import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

@Directive({
    selector: 'router-outlet'
})

export class AuthCheck extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;
    
    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router,
    @Attribute('name')nameAttr:string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);
        
        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            'login': true
        };
    }
    
    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        
        if(!this.publicRoutes[url] && !localStorage.getItem('auth_key')){
            this.parentRouter.navigateByUrl('/login');
        }
        
        return super.activate(instruction);
    }
}