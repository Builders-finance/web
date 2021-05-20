import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { MaterialIconsList } from 'src/app/shared/constants/material-icons';
import { AutoCompleteService } from 'src/app/shared/services/auto-complete.service';
import { RevExpService } from '../../pages/rev-exp/rev-exp.service';

@Component({
  selector: 'app-new-revexp',
  templateUrl: './new-revexp.component.html',
  styleUrls: ['./new-revexp.component.scss']
})
export class NewRevexpComponent implements OnInit {
  formRevExp: FormGroup;
  filteredIcons: any;

  constructor(public listIcons: MaterialIconsList, public autoCompleteService: AutoCompleteService, private revExpService: RevExpService,
    private toast: ToastService, public dialogRef: MatDialogRef<NewRevexpComponent>) {
    this.formRevExp = new FormGroup({
      icon: new FormControl(''),
      name: new FormControl('', Validators.required),
      rec_des: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.filteredIcons = this.formRevExp.controls.icon.valueChanges
          .pipe(
            startWith(''),
            map(model => model ?
              this.autoCompleteService.filterAutoComplete(model, this.listIcons.LIST_ICONS, this.formRevExp.controls.icon.value) : this.listIcons.LIST_ICONS.slice())
          );
  }

  get f() { return this.formRevExp.controls};

  iconSelected($event) {
    // console.log($event)
  }

  save() {
    console.log(this.formRevExp.value);
    this.revExpService.create(this.formRevExp.value).subscribe(res => {
      console.log(res);
      this.toast.showSuccess("Receita/Despesa cadastrada com sucesso!");
      this.dialogRef.close('revexp-added');
    })
  }
}
