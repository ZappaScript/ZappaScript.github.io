import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-gridcard',
  templateUrl: './gridcard.component.html',
  styleUrls: ['./gridcard.component.scss']
})
export class GridcardComponent implements OnInit {
  @Input() project: any;
  public iframeSrc: any;
  
  constructor() { }

  ngOnInit() {

    
  }

  
}
