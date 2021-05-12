import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalNewExpenseComponent } from '../modal-new-expense/modal-new-expense.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  open() {
    this.bsModalRef = this.modalService.show(ModalNewExpenseComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    // this.newExpenseShowLoading = false
    // this.displayFormErrors = false
    // this.formValid = false
    // this.modalRef = this.modalService.show(template,this.config);
  }

}
