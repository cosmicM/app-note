import { NoteService } from './../services/note.service';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  title: string;
  description: string;
  categories: Category[];
  idCategoryNote: string;

  constructor(private filterService: FilterService, private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.categories = this.filterService.getFilters();
  }

  add() {
    this.noteService.addNote(this.title, this.description, this.idCategoryNote);
    // this.router.navigate(['']);
    this.router.navigateByUrl('');
  }
}
