import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { StaffService } from './staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate , CanActivateChild{
  constructor(private stf: StaffService,
    private myRoute: Router){  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if(this.stf.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let loggedInUser= this.stf.isLoggedIn();
        if (loggedInUser) {
                return true;		
        } else {
          console.log('Unauthorized to open link: '+ state.url);
          return false;
        }

}
  
}
