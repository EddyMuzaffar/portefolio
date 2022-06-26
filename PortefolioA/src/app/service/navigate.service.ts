import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { BehaviorSubject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigateService {
   public navigation_step: BehaviorSubject<string>;
  
  constructor(
    private router: Router,
    private location: Location,
  ) { 
    this.navigation_step = new BehaviorSubject<string> ('ASIDE');
    }

    navigate(path : string[], step: string){
      console.log(path)
      if(path){
      console.log('NAVIGATE #' + path.join('/'), step);
      }else{
        console.log('no path');
      }
      this.router.navigate(path).then(()=>{
        this.navigation_step.next(step);
      })
    }
   
  
}
