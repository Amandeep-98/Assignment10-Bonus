import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drama'
})
export class DramaPipe implements PipeTransform {

  //value is movieList = array
  transform(movieListArray:any, movieType:any) {
    return movieListArray.filter(function(item:any){
         let result = item.type.find(function(element:any) {
          if (element.includes(movieType)) {
            return true;
          }
        })
        return result;
    });
  }

}
