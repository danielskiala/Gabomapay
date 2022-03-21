import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdminAuthService } from '../../services/admin/admin-auth.service';


@Injectable({
  providedIn: 'root'
})
export class IsConnectGuard implements CanActivate {
  constructor(private auth:AdminAuthService, private router: Router){}

  canActivate():any {
    return this.auth.statut().pipe(
      map((LoggedIn:boolean) =>{
        if(!LoggedIn){
          return true;
        }else{
          return this.router.createUrlTree(['/admin/home']);
        }
      })
    )
  }
  
}
