import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { DetailCardService } from 'src/app/service/detail-card.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  cards! : Card[];

  cardaa! : Observable<Card[]>;
  constructor(private cardService : DetailCardService) { }

  ngOnInit(): void {
    this.cardaa = this.cardService.getAllCard();
    //this.cards=this.cardService.getAllCard();
    console.log(this.cardaa)
  }

}
