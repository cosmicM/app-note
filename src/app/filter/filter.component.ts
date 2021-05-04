import { FilterService } from './../services/filter.service';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSelectedFilter = new EventEmitter<string>();
  categories: Category[];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.categories = this.filterService.getFilters();
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }

  filterByTitle(search_filter_id: string) {
    var searched_string = (document.getElementById(search_filter_id) as HTMLInputElement).value;
  }
}
