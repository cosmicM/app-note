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
  
  ownerID = '00000000-0000-0000-0000-000000000007';

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

  editNoteContent(note_content_id: string) {
    var previous_text = document.getElementById(note_content_id).innerText;
    document.getElementById(note_content_id).outerHTML = "<textarea id='" + note_content_id + "' class='edit_textarea' rows='5'>" + previous_text + "</textarea>";
  }
}

export interface Note {
  id: string;
  ownerID: string;
  title: string;
  description: string;
  categoryId: string;
}
