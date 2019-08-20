import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { ProjectsService } from './projects-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GridcardComponent } from './gridcard/gridcard.component';
import { PaginationService } from './pagination.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    FooterComponent,
    ProjectGridComponent,
    GridcardComponent,
    AboutMeComponent,
    SidebarComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
