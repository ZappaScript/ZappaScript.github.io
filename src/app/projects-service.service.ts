import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'
import { DomSanitizer } from '@angular/platform-browser';
import { PaginationService } from './pagination.service';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: any[];
  filterTag: string = '';
  public httpOptions;
  public topicsSet: Set<string> = new Set<string>();
  public projectsObservable: Subject<any[]> = new Subject<any[]>()
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, public paginationService: PaginationService ) {
    
    if(isDevMode()){
      this.httpOptions = {headers : new HttpHeaders({'Authorization':'token '+ environment.OAuth,
      "Accept": "application/vnd.github.mercy-preview+json"
    })}
    }

    this.getProjects().subscribe((data: any) => {
      this.projects = data;
      this.projects.forEach(project => {
        console.log(project);

        this.getLanguages(project.name).subscribe(
          (res: any) => {console.log('lRes',res);project.languages = res;} 
          );
        this.getImage(project.name).subscribe(
          (res: any) =>{project.previewImage = this.getSafeUrl(`data:image/png;base64,${res.content}`)
          console.log(project.previewImage);
          ;}
          )
        this.addTopics(project.topics)
      });
      
      this.getCurrentPage();
    });
   }

  getCurrentPage(filteredArray?: any[])
  {
    
    let projects = typeof filteredArray == 'undefined' ? this.projects : filteredArray;
    this.paginationService.setNumPages(Math.ceil(projects.length / 4))
    let _projects = projects.slice((this.paginationService.getCurrentIndex() - 1) * 4, this.paginationService.getCurrentIndex() * 4);
    this.projectsObservable.next(_projects);
  } 
  getProjects() {
    return this.http.get('https://api.github.com/users/ZappaScript/repos', this.httpOptions);


  }
  getLanguages(repo: string){

    return this.http.get(`https://api.github.com/repos/ZappaScript/${repo}/languages`,this.httpOptions);
    
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
   }

   getImage(repo: string){
    return this.http.get(`https://api.github.com/repos/ZappaScript/${repo}/contents/preview.png`,this.httpOptions);
   }
   
   addTopics(topics: string[]){
    for (let t of topics){
      console.log(t)
      this.topicsSet.add(t);
    }
   }
  
   filterTopics(searchTag: string){
    this.getCurrentPage()
    return Array.from(this.topicsSet).filter( (topic: string) => { return (topic.indexOf(searchTag)>-1) } )
  }
  filterProjectsByTopic(topic: string){
    this.projects.filter((proj)=>{ })

  }
    
}
