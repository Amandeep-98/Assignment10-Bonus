import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  clearInput = '';
  promiseError: string;
  
    
  constructor() {    
   }

  ngOnInit(): void {
  }

  // promiseFunction(){
  //   let ourPromise:any = new Promise((success, fail) =>{
  //     let testPass = false;
  //     if (testPass){
  //     console.log("addition is successful")
  //     success("Success was achieved!");
  //     }
  //     else{
  //     fail("Failure :(");
  //     }      
  //     });
  //     return ourPromise;      
  // }

  

    // this.ourPromise.then((successResult:any) => {
    //   console.log(successResult);
    // })
    //   .catch(failResult => console.log(failResult))

   error = false;
   //doAsyncTask() which will happen after 1000 msec
   doAsyncTask() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.error) {
            reject('content failed to be added'); // pass values
          } else {
            resolve('content added'); // pass values
          }
        }, 1000);
      });
    }
    
    

//"8;Lawrence of Arabia;drama;image.jpg;The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.";
addNewItem(value: string, e:any) {
      e.preventDefault();
      console.log("value", value);

      this.doAsyncTask().then(
        (val) => {console.log(val)
          //input field cleared
          this.clearInput = "";
          this.newItemEvent.emit(value);      
        },
        (err) => {console.error(err)
        this.promiseError = "content failed to be added"
        }
      );

      // let PromiseResult = await this.promiseFunction();

    // console.log("PromiseResult", PromiseResult)
    
    // if(PromiseResult){
      
    // }else{
    //   this.promiseError = "content failed to be added";
    // }
    
  }
}
