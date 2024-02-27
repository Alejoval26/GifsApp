import { Component} from '@angular/core';

@Component({
  selector: 'gifs-searchbox',
  template:`
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs...">
  `
})

export class SearchboxComponent  {
  constructor() { }


}