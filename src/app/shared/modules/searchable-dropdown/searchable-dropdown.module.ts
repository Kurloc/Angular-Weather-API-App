import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableDropdownComponent } from './searchable-dropdown.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    SearchableDropdownComponent
  ],
  exports: [
    SearchableDropdownComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SearchableDropdownModule { }
