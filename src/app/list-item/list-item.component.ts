import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteModel } from 'src/models/note.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  componentType: string = "item";

  @Input()
  note: NoteModel | undefined;


  @Output()
  viewAction: EventEmitter<NoteModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.viewAction.emit(this.note);
  }

}
