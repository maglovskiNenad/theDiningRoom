import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantList } from '../model/restaurants-list.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantList = new RestaurantList();
  params = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: 'All',
      priceFrom: 0,
      priceTo: 5,
    },
  };

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.params.filter.cuisine =
        params['cuisine'] == 'All' ? '' : params['cuisine'];
      this.params.page = 1;
      this.getRestaurants();
    });
  }

  getRestaurants(): void {
    this.service.getRestaurnats(this.params).subscribe({
      next: (restaurnats: RestaurantList) => {
        console.log(restaurnats);
        this.restaurants = restaurnats;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onPageChanged(newPage: number) {
    console.log('RestaurantsComponent', newPage);
    this.params.page = newPage;
    this.getRestaurants();
  }

  priceChanged(): void {
    this.params.page = 1;
    this.getRestaurants();
  }
}
