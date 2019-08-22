import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects-service.service';
import { PaginationService } from '../pagination.service';



@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  private _projects: any;
  public projects: any;

  constructor(private projectService: ProjectsService, private paginationService: PaginationService) { }
  ngOnInit() {
    let ps = this.projectService;
    ps.getProjects().subscribe(data => {
      this._projects = data;
      this._projects.forEach(project => {
        console.log(project);

        ps.getLanguages(project.name).subscribe(
          res => {console.log('lRes',res);project.languages = res;} 
          );
        ps.getImage(project.name).subscribe(
          res =>{project.previewImage = ps.getSafeUrl(`data:image/png;base64,${res.content}`)
          console.log(project.previewImage);
          ;}
          )
        ps.addTopics(project.topics)
      });
      
      this.paginationService.setNumPages(Math.ceil(this._projects.length / 4))
      this.projects = this._projects.slice((this.paginationService.getCurrentIndex() - 1) * 4,
        this.paginationService.getCurrentIndex() * 4);
    });
  }

  ngDoCheck() {
    if (typeof this._projects != 'undefined'){
      this.projects = this._projects.slice((this.paginationService.getCurrentIndex() - 1) * 4,
      this.paginationService.getCurrentIndex() * 4);
      }
    if (typeof this.projectService.topicsSet != undefined){
      console.log(this.projectService.topicsSet);
    }
  }
}
