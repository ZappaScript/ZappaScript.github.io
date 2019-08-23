import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects-service.service';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  
  public projects: any;

  constructor(private projectService: ProjectsService, private paginationService: PaginationService) { }
  ngOnInit() {
    this.projects = this.projectService.projects.slice();
    this.projectService.projectsObservable.subscribe( val => this.projects = val)
  }

  ngDoCheck() {
    if (typeof this.projectService.projects != 'undefined'){
      this.projects = this.projectService.projects.slice((this.paginationService.getCurrentIndex() - 1) * 4,
      this.paginationService.getCurrentIndex() * 4);
      }
  }
}
