import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  movieForm:any;  
  contentList: any;
  @Output() newItemEvent = new EventEmitter<string>();
  obj= {
    name:'',
   type:'',
  image:'',
  body:'',
}
  
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient, private contentService: ContentServiceService,
   ) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      name: ["",],
      type: ["",],     
      imageUrl: ["",],
      body: ["",]      
    });
  }
  getMovieDetails(){
    // e.preventDefault();
    console.log(this.movieForm.value)
    this.contentService.addContent(this.movieForm.value)
      .subscribe(newContentFromServer =>{
      this.contentList.push(newContentFromServer);
      console.log(this.contentList);
      this.addNewItem(newContentFromServer);
      });
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
