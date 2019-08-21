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
  public previewImage: string ;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.iframeSrc = this.getSafeUrl(`https://zappascript.github.io/${this.project.name}`)
    this.getImage();
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
   }

   getImage(){
    fetch(`https://api.github.com/repos/ZappaScript/${this.project.name}/contents/preview.png`).then(res => res.json()).
    then(res =>{this.previewImage = `data:image/png;base64,${res.content}`})
   }
}
