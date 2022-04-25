import { Injectable } from '@angular/core';
import {movieList} from '../../src/app/contentDB/contentDb';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { any } from '../../src/helper-files/Movie-interface';


@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient) { }

  // getContentMovieList() : Observable<any>{
  //   return of(movieList);
  //   }

    // getContentOfMovieById(id:any) : Observable<any>{
    //   let movieContent;
    //   for(let i=0; i<movieList.length; i++){
    //     if(movieList[i].id === id){
    //       movieContent = movieList[i];
    //     }
    //   }     
    //   return of(movieContent)
    //   }

    private httpOptions = {
      headers: new HttpHeaders({ 'Content-type':
      'application/json' })
      };

    getContent() : Observable<any[]>{
      return this.http.get<any[]>("api/content");
      }
      addContent(newContentItem: any):
Observable<any>{
return this.http.post<any>("api/content"
,
newContentItem, this.httpOptions);
}

getContentById(id:any) : any{
let resultData:any;
return this.http.get<any[]>("api/content/" + id);
  }

// updateContent(contentItem: Content): Observable<any>{
//   return this.http.put("api/content"
//   , contentItem,
//   this.httpOptions);
//   }
}
