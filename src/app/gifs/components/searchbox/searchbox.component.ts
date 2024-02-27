import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-searchbox',
  template:`
    <h5>Buscar</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"#txTTagInput>
  `
})

export class SearchboxComponent  {

  @ViewChild('txTTagInput')
  public tagInpuT!:ElementRef<HTMLInputElement>;

  constructor() { }

  searchTag():void{
    const newTag = this.tagInpuT.nativeElement.value;
    console.log(newTag);
  }
}
