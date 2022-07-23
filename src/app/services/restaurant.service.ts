import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Menu } from '../model/menu.model';
import { RestaurantList } from '../model/restaurants-list.model';

const baseUrl = 'http://localhost:3000/api/restaurants'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurnats(params?:any): Observable<RestaurantList> {

    let options = { }
    if (params) {
      options = {
        params: new HttpParams()
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || "")
          .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get(baseUrl, options).pipe(map((data: any) => {
      return new RestaurantList(data);
    }))
  }

  getMenu(restaurantId: number): Observable<Menu> {
    return this.http.get(`${baseUrl}/${restaurantId}/menus`).pipe(map((data: any) => {
      return data && data.results && new Menu(data.results[0]) || new Menu();
    }))
  }
}
