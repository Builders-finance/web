import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { ModalNewExpenseComponent } from 'src/app/internal/components/new-expense/modal-new-expense/modal-new-expense.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private media: MediaMatcher) { }

  ngOnInit() {
  }

  open() {
    // this.bsModalRef = this.modalService.show(ModalNewExpenseComponent);
    // this.bsModalRef.content.closeBtnName = 'Close';
    // this.newExpenseShowLoading = false
    // this.displayFormErrors = false
    // this.formValid = false
    // this.modalRef = this.modalService.show(template,this.config);
    let width = '80vh';
    const mobileQuery = this.media.matchMedia('(min-width: 768px)');
    mobileQuery.onchange = (res) => {
      if (res.matches) {
        width = '50vh';
      }
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { top: '10' };
    dialogConfig.hasBackdrop = false;
    dialogConfig.width = width;
    dialogConfig.data = {};
    const modalRef = this.dialog.open(ModalNewExpenseComponent, dialogConfig);

    modalRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

}
