import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { DramaPipe } from './drama.pipe';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../app/in-memory-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentCardComponent } from './content-card/content-card.component';
import { DisplaycontentComponent } from './displaycontent/displaycontent.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,   
    ContentListComponent, DramaPipe, MovieCardComponent, HoverEffectDirective, ModifyContentComponentComponent, ContentCardComponent, DisplaycontentComponent, ContentDetailComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ContentCardComponent]
})
export class AppModule { }
