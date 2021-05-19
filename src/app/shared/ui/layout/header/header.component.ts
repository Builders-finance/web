import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { ModalNewExpenseComponent } from 'src/app/internal/components/new-expense/modal-new-expense/modal-new-expense.component';
import { LoginService } from 'src/app/external/pages/login/login.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  user: any;
  isDesktop: boolean = true;
  menuOpened: boolean = false;
  constructor(public dialog: MatDialog, private media: MediaMatcher, private loginService: LoginService,
    private layoutService: LayoutService) { }

  ngOnInit() {
    this.user = this.loginService.getCurrentUser();
    this.layoutService.menuOpenedChange.subscribe(res => {
      this.menuOpened = res;
    })

    const mobileQuery = this.media.matchMedia('(min-width: 768px)');
    this.isDesktop = mobileQuery.matches;
    mobileQuery.onchange = (res) => {
      this.isDesktop = res.matches;
    }
  }

  open() {
    let width = '80vh';
    let maxWidth = '80vh';
    const mobileQuery = this.media.matchMedia('(min-width: 768px)');
    mobileQuery.onchange = (res) => {
      console.log(res.matches);
      if (res.matches) {
        width = '50vh';
        maxWidth = '100vh';
      }
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { top: '10' };
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = width;
    dialogConfig.maxWidth = maxWidth;
    dialogConfig.panelClass = 'mat-dialog-override';
    dialogConfig.data = {};
    const modalRef = this.dialog.open(ModalNewExpenseComponent, dialogConfig);

    modalRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

  public logout() {
    this.loginService.logout();
  }

}
