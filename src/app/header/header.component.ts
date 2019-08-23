import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  inputSearch: string = '';
  filteredTopics : string[] = [];
  constructor(public router: Router, public route: ActivatedRoute, public projectService: ProjectsService) { }

  ngOnInit() {
  }

  onClick(route: string) {
    this.router.navigate([route], {relativeTo:this.route});
  }

  ngDoCheck(){
    this.filteredTopics = this.projectService.filterTopics(this.inputSearch).slice();
    console.log(this.filteredTopics);
  }
  setProjectFilter(filterTag: string){
    console.log(filterTag);

  }
}