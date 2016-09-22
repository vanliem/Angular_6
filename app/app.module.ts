import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import './rxjs-extension';

import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";

import { routing } from './app.routing'
import {AppComponent} from "./components/app.component";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {HeroesComponent} from "./components/heroes.component";
import {HeroService} from "./services/hero.service";
import {DashboardComponent} from "./components/dashboard.component";
import {HeroSearchComponent} from "./components/hero-search.component";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      HeroDetailComponent,
      HeroesComponent,
      HeroSearchComponent
  ],
  providers: [
      HeroService
  ],
    bootstrap: [AppComponent]
})

export class AppModule { }
