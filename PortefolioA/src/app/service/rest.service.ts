import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

const API_URL = 'http://127.0.0.1:42001/API/formations'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    public http : HttpClient,
   
  ) { }

   data! : User[];

  get(){
    
  }
}
