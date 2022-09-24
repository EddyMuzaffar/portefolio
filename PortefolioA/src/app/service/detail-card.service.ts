import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card.model';
import { map } from 'rxjs/operators';

const API_URL = 'http://127.0.0.1:42001/API/formations'
const API_UR = 'http://127.0.0.1:42001/API/formation'
const
  API_U = 'http://127.0.0.1:42001/API/postCard'
@Injectable({
  providedIn: 'root'
})
export class DetailCardService {

  constructor(public http : HttpClient){

  }
  cards: Card[] =[{
    photo : "https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    id: 1,
    name :"project 1",
    description:"description blan bala"
  },
  {
  photo : "https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
  id: 2,
  name :"project 2",
  description:"description blo blo"
},
{
  photo : "https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
  id: 3,
  name :"project 3",
  description:"description blo blo"
},
{
  photo : "https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
  id: 3,
  name :"project 3",
  description:"description blo blo"
},
];

public data! : Observable<Card[]>;

  getAllCard(): Observable<Card[]>{
  return this.http.get<Card[]>(API_URL);
  }

 //@todo a mettre dansl cardService.ts en bas du tableau json
getCardById(cardid :number):Observable<Card[]>{
  let API_URL_BYID = API_UR + '?' + cardid;
  console.log(API_URL_BYID);
  return  this.http.get<Card[]>(API_URL_BYID);

}

toto(){
  return this.http.get(API_URL)

}
postCard(data : any){
  console.log(data)
  const body=JSON.stringify(data);
  console.log(body);
  const headers = { 'content-type': 'application/json'};
  return this.http.post(API_U,  body, {'headers' : headers}).subscribe(res => console.log(res));

}
}
