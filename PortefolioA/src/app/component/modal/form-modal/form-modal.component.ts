import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DetailCardService } from 'src/app/service/detail-card.service';
import { NavigateService } from 'src/app/service/navigate.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  path_project = ['project'];
  path_accueil = ['home'];
  constructor(public detailCard : DetailCardService, public navigation : NavigateService) { }
  nom! : string;
  message! : string;
  date! : string;
  repo! : string;
  data! : any;

  submitForm(){
    if(this.nom,this.message,this.date,this.repo != null){
        this.data = {
            name : this.nom,
            message : this.message,
            date : this.date,
            repo : this.repo
        }
      this.detailCard.postCard(this.data);
      this.navigation.navigate(this.path_accueil, 'ASIDE')
    }
  }

  ngOnInit(): void {
  }

}
