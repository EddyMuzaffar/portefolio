import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { DetailCardService } from 'src/app/service/detail-card.service';
import { ModalService } from 'src/app/service/modal.service';
import { ModalProjectComponent } from '../modal/modal-project/modal-project.component';
import { Observable, Subscriber } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations:[fadeIn,
  fadeOut]

})
export class CardComponent implements OnInit {
 @Input() carda! : Card;
 public data! : Card[];

 @ViewChild('card', { static: false }) card!: ElementRef;
  changeText: any;
  constructor(
    public cardService : DetailCardService,
    public modal : ModalService
  ) {
  }

  documentClickEvent($event: MouseEvent) {
   this.card.nativeElement.style.backgroundColor = 'red';
  }

  open(){

    this.cardService.getCardById(this.carda.id).subscribe(
      (res) => {
        console.log(res);
        this.modal.open(ModalProjectComponent,{animation: true, size:'lg'}, res);
      }
    )
  }




  ngOnInit(): void {
  }}
