import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  exports: [CommonModule, MatTableModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  providers: [],
})
export class SharedModule {
}
