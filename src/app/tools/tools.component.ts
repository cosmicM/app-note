import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title: string= "Title";
  titleColor: string = "blue";
  noteContent: string= "type";
  currentDate: Date = new Date(2021, 4, 1);
  array = ['string1', 'string2'];
  My_list = ['Ford', 'audi', 'Suzuki', 'MAZDA'];
  
  constructor() { }

  ngOnInit(): void {
  }

  setTitle(anycolor) {
    this.title = "Test";
    this.titleColor = anycolor;
    this.noteContent = "type";
  }
}


