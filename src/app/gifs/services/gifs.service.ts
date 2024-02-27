import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagHistory: string[] = [];
  private appiKey:string = 'AORSCdEBqlMi0lVeM9ywxcCGSfMmvr7u';
  private servicesUrl:string='https://api.giphy.com/v1/gifs'

  constructor(private  http: HttpClient) { }

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

  searchTag(tag: string): void {

    if (tag.length === 0) return;
    this.OrganizeHistory(tag);
    console.log(this.tagsHistory);

    const params = new HttpParams()
    .set('api_key', this.appiKey)
    .set('limit', '10')
    .set('q',tag)

    this.http.get(`${this.servicesUrl}/search`,{params})
    .subscribe(resp =>{
      console.log(resp);
    });

  }

}
