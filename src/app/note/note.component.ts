import { NoteService } from './../services/note.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {

  @Input() selectedCategoryId: string;
  @Input() searchedNoteTitle: string;

  notes: Note[];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe((result) => this.notes = result);
  }

  ngOnChanges() {
    if (this.selectedCategoryId) {
      this.noteService.getFilteredNotes(this.selectedCategoryId).subscribe((result) => this.notes = result);
    }
  }

  deleteNote(note_id: string) {
    document.getElementById(note_id).remove();
  }

  deleteNoteContent(note_content_id: string) {
    document.getElementById(note_content_id).innerText = "";
  }
}

export interface Note {
  id: string;
  title: string;
  description: string;
  categoryId: string;
}
