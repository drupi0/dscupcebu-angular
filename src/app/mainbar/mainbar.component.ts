import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';
import { TestService } from '../test.service';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss']
})
export class MainbarComponent implements OnInit {

  @Output()
  triggerUpdate: EventEmitter<NoteModel> = new EventEmitter();

  @Output()
  stringUpdate: EventEmitter<any> = new EventEmitter();

  constructor(public testAPI: TestService) { }

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

    // const notesStr = localStorage.getItem("notes");
    // let noteItems: NoteModel[] = [];

    // if(notesStr) {
    //   noteItems = JSON.parse(notesStr);
    // }

    // noteItems.push(noteItem);

    // localStorage.setItem("notes", JSON.stringify(noteItems));

    this.testAPI.postContents(noteItem).subscribe(data => {
      this.triggerUpdate.emit(noteItem);
      this.noteContent = "";
      this.noteTitle = "";
    })
  }

}
