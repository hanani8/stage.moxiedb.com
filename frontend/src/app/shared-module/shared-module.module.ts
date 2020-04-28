import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from 'src/app/search.pipe';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';





@NgModule({

  declarations: [SearchPipe],
  imports: [
    CommonModule,
    GoogleChartsModule


    // SearchPipe,

  ],
  exports: [SearchPipe, CommonModule, FormsModule,  GoogleChartsModule]
})
export class SharedModuleModule { }
