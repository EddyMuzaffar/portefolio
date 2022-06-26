import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public Modals : NgbModalRef[]=[];


  constructor(
    private modal: NgbModal,
  ) { }

  open(component : any, option : any, data : any){

    const modalref = this.modal.open(component, option);
    modalref.componentInstance.datas = data;

    }
}

