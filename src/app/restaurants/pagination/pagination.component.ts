import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number = 1;

  @Input()
  collectionSize: number = 0;

  @Input()
  pageSize: number = 9;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  pages: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.pages = []
    for (let i = 0; i < Math.ceil(this.collectionSize/this.pageSize); i++) {
      this.pages.push(i+1);
    }
  }

  changePage(newPage: number) {
    this.pageChange.emit(newPage);
  }

}
