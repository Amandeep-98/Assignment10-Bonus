import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  movieList: any;
  id: any;
  selectedMovie: any;

  constructor(private route: ActivatedRoute,
    private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("testing", typeof params.get('id'));
      this.id = Number(params.get('id'));
      let id = this.id;   
      this.contentService.getContentById(id).subscribe((result:any)=>{
        console.log("result", result)
        this.selectedMovie = [result];
      });      
      
      })
  }

}
