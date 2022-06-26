import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/service/navigate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public navigation : NavigateService
  ) { }

  ngOnInit(): void {
  }

  path_accueil = ['home'];
  path_project = ['project'];


}
