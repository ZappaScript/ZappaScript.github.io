import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: object[];
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('https://api.github.com/users/ZappaScript/repos');


  }
  getLanguages(repo: string){

    return this.http.get(`https://api.github.com/repos/ZappaScript/${repo}/languages`)
    
  }
}
