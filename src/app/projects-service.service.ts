import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: object[];
  public httpOptions;
  public topicsSet: Set<string> = new Set<string>();
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    
    if(isDevMode()){
      this.httpOptions = {headers : new HttpHeaders({'Authorization':'token '+ environment.OAuth,
      "Accept": "application/vnd.github.mercy-preview+json"
    })}
    }

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
    
}
