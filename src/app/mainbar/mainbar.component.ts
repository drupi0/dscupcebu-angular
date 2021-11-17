import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss']
})
export class MainbarComponent implements OnInit {

  @Output()
  triggerUpdate: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @Input()
  noteContent: string = "";

  @Input()
  noteTitle: string = "";


  ngOnInit(): void {
  }

  save() {
    const noteItem: NoteModel = {
      id: new Date().getMilliseconds().toString(),
      title: this.noteTitle,
      contents: this.noteContent
    }

    const notesStr = localStorage.getItem("notes");
    let noteItems: NoteModel[] = [];

    if(notesStr) {
      noteItems = JSON.parse(notesStr);
    }

    noteItems.push(noteItem);

    localStorage.setItem("notes", JSON.stringify(noteItems));

    this.triggerUpdate.emit(true);

    this.noteContent = "";
    this.noteTitle = "";

  }

}
