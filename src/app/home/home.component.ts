import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notesList: NoteModel[] = [];
  currentSelectedNote: NoteModel = {
    id: "",
    title: "",
    contents: ""
  };

  constructor(public testAPI: TestService) {}

  ngOnInit(): void {
    this.testAPI.getPosts().subscribe((data: NoteModel[]) => {
      this.notesList = data;
    });
  }

  updateList(newNote: NoteModel) {
    this.notesList.unshift(newNote);
  }

  viewExistingNote(value: NoteModel) {
    this.currentSelectedNote = value;
  }

}
