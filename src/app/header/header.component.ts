import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick(route: string) {
    this.router.navigate([route], {relativeTo:this.route});
  }
}
