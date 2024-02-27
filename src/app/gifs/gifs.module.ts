import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';




@NgModule({
  declarations: [
    HomepageComponent,
    SearchboxComponent,
    CardlistComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomepageComponent,

  ]

})
export class GifsModule { }
