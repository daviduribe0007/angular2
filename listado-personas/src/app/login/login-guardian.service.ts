import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService: LoginService,
    private router: Router){

    }

    canActivate(rout:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.loginService.isAutenticado()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }

    }
}