import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public currentIndex: number = 1;
  public pageNumber = 0;
  
  constructor() { }
  setNumPages(nPages:number){
    
    this.pageNumber = nPages;

  }
  getNumPages(): number {
    return this.pageNumber;
  }
  getCurrentIndex(): number {
    
    return this.currentIndex;

  }
}
