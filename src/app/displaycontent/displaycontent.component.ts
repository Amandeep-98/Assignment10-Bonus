import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-displaycontent',
  templateUrl: './displaycontent.component.html',
  styleUrls: ['./displaycontent.component.scss']
})
export class DisplaycontentComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
    private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("testing", params.get('id'));
      // this.id = +(params.get('id') ?? 0); // uses the +
      
      })
  }

}
