import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {NavigateService} from "../../service/navigate.service";

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('4s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('4s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations:[fadeIn,
    fadeOut]
})
export class IntroComponent implements OnInit {

  constructor(
    public route : NavigateService
  ) { }

  ngOnInit(): void {
  }

  animationDone() {
    console.log('dfe')
      this.route.navigate(['home'],'ASIDE')

  }
}
