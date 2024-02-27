import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagHistory: string[] = [];
  private appiKey:string = 'AORSCdEBqlMi0lVeM9ywxcCGSfMmvr7u';

  constructor() { }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private OrganizeHistory(tag: string){
    tag = tag.toLocaleLowerCase();

    if(this.tagsHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag)
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
  }

  public serachTag(tag: string): void {

    if (tag.length === 0) return;
    this.OrganizeHistory(tag);
    console.log(this.tagsHistory);
  }

}
