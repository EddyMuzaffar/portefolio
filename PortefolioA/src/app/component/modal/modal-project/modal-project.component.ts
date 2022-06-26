import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { DetailCardService } from 'src/app/service/detail-card.service';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent implements OnInit {

  @Input () datas: any;
  
  constructor( public cardService:DetailCardService ) { 
    
  }

 

  ngOnInit(): void {
  
   
  }

}
