import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  noteList: NoteModel[] = [];

  @Output()
  currentNote: EventEmitter<NoteModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("INITIALIZED");
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(change);
  }

  ngOnDestroy() {
    console.log("DESTROYED");
  }

  viewNote(value: NoteModel) {
    this.currentNote.emit(value);
  }
}
