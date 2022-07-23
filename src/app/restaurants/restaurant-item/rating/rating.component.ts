import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  grade: number = 0;

  @Input()
  iconFull: string = "";

  @Input()
  iconEmpty: string = "";

  fullArray: any[] = [];
  emptyArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fullArray = new Array(this.grade)
    this.emptyArray = new Array(5-this.grade)
  }

}
