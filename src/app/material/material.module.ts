import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

const materiallElements = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule

];

@NgModule({
  imports: [
    materiallElements
  ],
  exports: [
    materiallElements
  ]
})
export class MaterialModule { }
