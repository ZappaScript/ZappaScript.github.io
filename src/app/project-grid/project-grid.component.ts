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
    this.projectService.getProjects().subscribe(data => {
      this._projects = data;
      this._projects.forEach(project => {
        console.log(project);
        this.projectService.getLanguages(project.name).subscribe(
        res => {console.log('lRes',res);project.languages = res;} );
      });
      
      this.paginationService.setNumPages(Math.ceil(this._projects.length / 4))
      this.projects = this._projects.slice((this.paginationService.getCurrentIndex() - 1) * 4,
        this.paginationService.getCurrentIndex() * 4);
    });
  }

  ngDoCheck() {
    console.log('I execute');
    console.log(this._projects);
    this.projects = this._projects.slice((this.paginationService.getCurrentIndex() - 1) * 4,
      this.paginationService.getCurrentIndex() * 4);

  }
}
