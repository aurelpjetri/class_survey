import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private user_data: any;

  // for user related data
  setData(data: any): void{
    this.user_data = data;
  }

  getData(): any{
    return this.user_data;
  }

}
