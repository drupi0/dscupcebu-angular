import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notesList: NoteModel[] = [];
  currentSelectedNote: NoteModel = {
    id: "",
    title: "",
    contents: ""
  };

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    const notesStr = localStorage.getItem("notes");

    if(notesStr) {
      this.notesList = JSON.parse(notesStr);
    }
  }

  viewExistingNote(value: NoteModel) {
    this.currentSelectedNote = value;
  }
}
