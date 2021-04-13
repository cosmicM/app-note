import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteTitle: string="";
  noteDescription: string="";

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
    this.noteTitle = params['title']; 
    this.noteDescription = params['description'];
  })
}

addNote(): void
  {
   alert(this.noteTitle + '\n' + this.noteDescription);
  }
}