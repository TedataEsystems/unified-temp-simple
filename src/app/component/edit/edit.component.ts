import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  selectAll = false;

  constructor( public dialogRef: MatDialogRef<EditComponent>){
  }

    ngOnInit(){
    }

    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      NameofSalesManager: new FormControl('', Validators.required),
      Contact: new FormControl('', Validators.required),
      ContactName: new FormControl('', Validators.required),
      CompanyName: new FormControl('', Validators.required),
      OtherInformation: new FormControl(''),

      NumberofCircuits: new FormControl('', Validators.required),
      FullAddress: new FormControl('', Validators.required),
      ExchangeName: new FormControl('', Validators.required),

      Name: new FormControl('', Validators.required),

      ContractPeriod: new FormControl(''),
      CircuitProtection: new FormControl('1'),
      PathProtection: new FormControl('1'),
      PromisingArea: new FormControl('1'),
      E1: new FormControl(false),
      E3: new FormControl(false),
      DS3: new FormControl(false),


    });





    onClear(){
      // this.service.form.reset();
      // this.service.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
    }
    onSubmit(){

      // this.notificationService.success(':: Submitted successfully');
      this.onClose();
      this.dialogRef.close('save');

      }

    onClose(){

      this.form.reset();
      this.dialogRef.close('save');

    }
}
