import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedCategoryId: string;
  messageToSend: string;
  
  constructor() {}

  ngOnInit() {}

  receiveCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
  }
}
