import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
// import { MovieInterface } from '../../src/helper-files/Movie-interface';
import { movieList } from '../app/contentDB/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const content: any[] = movieList;
    return {content};
    }

    genId(content: any[]): number {
      return content.length > 0 ?
      Math.max(...content.map(c => c.id)) + 1 : 2000;
      }
}
