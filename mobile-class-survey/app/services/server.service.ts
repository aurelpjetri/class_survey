import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private url: string;

  // for user related data
  setURL(ip: string, port: string): void{
    this.url = 'http://'+ip+':'+port;
  }

  getURL(): string{
    return this.url;
  }

}
