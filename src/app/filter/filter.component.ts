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
    this.categories = this.filterService.categories;
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }
}
