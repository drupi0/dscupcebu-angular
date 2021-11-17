import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  noteList: NoteModel[] = [];

  @Output()
  currentNote: EventEmitter<NoteModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewNote(value: NoteModel) {
    this.currentNote.emit(value);
  }
}
