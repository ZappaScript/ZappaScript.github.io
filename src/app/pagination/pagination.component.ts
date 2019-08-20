import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  constructor(private paginationService: PaginationService) { }
  getNumPages(): number{
    return this.paginationService.getNumPages();
  }
  getCurrentIndex(): number {
    return this.paginationService.getCurrentIndex();
  }
  pagLeft(){
    if (this.paginationService.getCurrentIndex() > 1) {
      this.paginationService.currentIndex--;
    }
  }
  pagRight() {
    if (this.paginationService.getCurrentIndex() < this.paginationService.getNumPages()) {
      this.paginationService.currentIndex++;
    }
  }
  
}
