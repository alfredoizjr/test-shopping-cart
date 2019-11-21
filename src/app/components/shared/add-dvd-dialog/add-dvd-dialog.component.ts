import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-dvd-dialog',
  templateUrl: './add-dvd-dialog.component.html',
  styleUrls: ['./add-dvd-dialog.component.css']
})
export class AddDvdDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDvdDialogComponent>,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null],
      genre: [null, Validators.required],
      image_url: [null],
      price: [null, Validators.required],
      title: [null, Validators.required],
      qty: [null, Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.status === 'INVALID') {
      return;
    } else {
      this.notifierService.notify('success', 'The new DVD was added!');
      this.dialogRef.close();
    }
  }
}
