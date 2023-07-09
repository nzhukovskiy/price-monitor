import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkStorageService {

  constructor() { }

  getLink() {
    return localStorage.getItem("link");
  }

  setLink(link: string) {
    localStorage.setItem("link", link);
  }
}
