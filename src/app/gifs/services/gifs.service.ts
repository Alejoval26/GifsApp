import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];
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

    this.http.get<SearchResponse>(`${this.servicesUrl}/search`,{params})
    .subscribe((resp) =>{

      this.gifList = resp.data

    });

  }

}
