import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { RestService } from 'src/app/service/rest.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import { DetailCardService } from 'src/app/service/detail-card.service';



const API_URL = 'http://127.0.0.1:42001/API/formations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public rest: RestService,
    public detailCard: DetailCardService,
    public http : HttpClient
  ) { }
   data! : User[]

  ngOnInit(): void {
    

    
  }

  test(){
      
      let bozo = 'vladir cauhcemar';
      this.detailCard.postCard(bozo);
  }

}
