import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { RevExp } from 'src/app/shared/models/revExp.model';
import { NewRevexpComponent } from '../../components/new-revexp/new-revexp.component';
import { RevExpService } from './rev-exp.service';


@Component({
  selector: 'app-rev-exp',
  templateUrl: './rev-exp.component.html',
  styleUrls: ['./rev-exp.component.scss']
})
export class RevExpComponent implements OnInit {
  revExp: Pagination<RevExp>;
  pageSize: number = 5;
  pageNo: number = 0;
  constructor(private revExpService: RevExpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.search();

  }

  search(pageNo?, pageSize?) {
    pageSize = pageSize ?? this.pageSize;
    pageNo = pageNo ?? this.pageNo;
    let params = Object.assign({}, {take: this.pageSize, skip: pageNo})
    this.revExpService.list(params).subscribe(res => {
      // res.data.map(item => item.icon = 'home')
      this.revExp = res;
    })
  }

  addRevExp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'mat-dialog-override';
    dialogConfig.data = {};
    const modalRef = this.dialog.open(NewRevexpComponent, dialogConfig);

    modalRef.afterClosed().subscribe(result => {
      if(result == 'revexp-added') {
        this.search();
      }
       console.log(result);
    });
  }

}
