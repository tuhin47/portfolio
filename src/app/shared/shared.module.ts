// Angular modules
import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';
import { RouterModule }               from '@angular/router';

// Layouts
import { LayoutHeaderComponent }     from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent }       from './components/layouts/page-layout/page-layout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SafePipe } from './utils/safe.pipe';


@NgModule({
  imports         :
  [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations    :
  [

    // Layouts
    LayoutHeaderComponent,
    PageLayoutComponent,
    SafePipe,

  ],
  exports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,


      // Layouts
      LayoutHeaderComponent,
      PageLayoutComponent,
      SafePipe,

    ],
  providers       :
  [
  ]
})
export class SharedModule {}
