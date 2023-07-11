import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterType} from "../../../types/filter.type";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filters!: FilterType;
  @Output() filtersChange = new EventEmitter<FilterType>;

  ngOnInit(): void {
  }

  emitFiltersChange() {
    console.log("Hi");
    this.filtersChange.emit(this.filters);
  }
}
