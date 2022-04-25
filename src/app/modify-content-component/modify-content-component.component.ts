import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentServiceService } from '../content-service.service';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentCardComponent } from '../content-card/content-card.component';

export interface DialogData {
  id: string,
  name: string,
  type: string[],
  imageUrl: string,
  body: string,

}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})


export class ModifyContentComponentComponent implements OnInit {

  movieForm:any;
  contentList: any=[];
  @Output() newItemEvent = new EventEmitter<string>();
  name: any;
  type: any;
  image: any;
  body: any;
  display: string;
  data: any;
    
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient, private contentService: ContentServiceService, public dialog: MatDialog,
  
   ) { }

  ngOnInit(): void {
    // this.movieForm = this.formBuilder.group({
    //   name: ["",],
    //   type: ["",],     
    //   imageUrl: ["",],
    //   body: ["",]      
    // });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ContentCardComponent, {
      height: '500px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {      
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      this.display = JSON.stringify(result);
      console.log(JSON.parse(this.display));
      this.data = JSON.parse(this.display);
      this.addNewItem(this.data)
    });
  }

  // getMovieDetails(e:any){
  //   // e.preventDefault();
  //   console.log(this.movieForm.value)
  //   this.contentService.addContent(this.movieForm.value)
  //     .subscribe(newContentFromServer =>{
  //     this.contentList.push(newContentFromServer);
  //     console.log(this.contentList);
  //     this.addNewItem(newContentFromServer);
  //     });
  // }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
