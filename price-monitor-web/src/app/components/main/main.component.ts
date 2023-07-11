import { Component } from '@angular/core';
import {FilterType} from "../../types/filter.type";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  link: string = "";
  filters : FilterType = {
    sorting: {
      order: "desc",
      sortingProperty: "title"
    },
    seller: {
      ozon: true,
      aliexpress: true,
      dns: true,
      mvideo: true,
      citilink: true
    }
  };

  setLink(link: string) {
    this.link = link;
  }

  handleFiltersChange(filters: FilterType) {
    console.log(filters);
  }
}
