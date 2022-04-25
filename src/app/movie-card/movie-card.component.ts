import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/helper-files/Movie-interface';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private contentService: ContentServiceService) {
    
   }

  ngOnInit(): void {
  }
 
}
