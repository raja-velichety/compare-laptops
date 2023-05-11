import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
 MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
 MatGridListModule, MatIconModule, MatInputModule, MatListModule,
 MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
 MatSidenavModule,
 MatSliderModule,
 MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule,MatExpansionModule,MatPaginatorModule
} from '@angular/material';

@NgModule({
 imports: [
   CommonModule
 ],
 declarations: [],
 exports: [
   MatInputModule,
   MatTabsModule,
   MatIconModule,
   MatListModule,
   MatButtonModule,
   MatToolbarModule,
   MatDialogModule,
   MatMenuModule,
   MatGridListModule,
   MatCardModule,
   MatSnackBarModule,
   MatTooltipModule,
   MatSliderModule,
   MatAutocompleteModule,
   MatDatepickerModule,
   MatSlideToggleModule,
   MatSidenavModule,
   MatCheckboxModule,
   MatNativeDateModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatRippleModule,
   MatExpansionModule,
   MatPaginatorModule
 ]
})
export class MaterialComponentsModule { }