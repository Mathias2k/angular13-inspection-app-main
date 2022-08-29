import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesApiService {

  readonly bikesAPIUrl = "https://localhost:7240/api";

  constructor(private http:HttpClient) { }

  getBikeList():Observable<any[]> {
    return this.http.get<any>(this.bikesAPIUrl + '/bikes');
  }

  addBike(data:any) {
    return this.http.post(this.bikesAPIUrl + '/bikes', data);
  }

  updateBike(id:number|string, data:any) {
    return this.http.put(this.bikesAPIUrl + `/bikes/${id}`, data);
  }

  deleteBike(id:number|string) {
    return this.http.delete(this.bikesAPIUrl + `/bikes/${id}`);
  }
}
