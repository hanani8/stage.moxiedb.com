import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from 'src/app/search.pipe';
import { FormsModule } from '@angular/forms';





@NgModule({

  declarations: [SearchPipe],
  imports: [
    CommonModule,
    

    // SearchPipe,

  ],
  exports: [SearchPipe, CommonModule, FormsModule]
})
export class SharedModuleModule { }
