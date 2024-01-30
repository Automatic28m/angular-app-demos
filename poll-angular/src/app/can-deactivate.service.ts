import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CreatePollComponent } from './create-poll/create-poll.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CreatePollComponent>{

  constructor() { }

  confirm: boolean = false;

  canDeactivate(component: CreatePollComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canExit();

    // if(component){
    //   console.log("component is not null");
    // }else{
    //   console.log("component is null");
    // }

    // return component.canDeactivate();
    // this.confirm = confirm("You have unsave changes. Do you really want to discard theses changes?");
    // if(this.confirm){
    //   return true;
    // }else{
    //   return false;
    // };
    // return false;
  }
}
