import { Component, OnInit } from '@angular/core';
import { FormModalComponent } from 'src/app/component/modal/form-modal/form-modal.component';
import { ModalService } from 'src/app/service/modal.service';
import { IconsModule } from 'src/app/module/icons/icons.module';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css']
})
export class ProjectHeaderComponent implements OnInit {

  constructor(
    private modal : ModalService
  ) { }

  ngOnInit(): void {
  }

  openForm(){
    this.modal.open(FormModalComponent,null,null)
  }
}
