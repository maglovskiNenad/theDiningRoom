import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from 'src/app/menu/menu.component';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input()
  restaurant: Restaurant = new Restaurant();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openMenu():void {
    const modalRef = this.modalService.open(MenuComponent, { size: 'lg'});
    modalRef.componentInstance.restaurant = this.restaurant;
  }

}
