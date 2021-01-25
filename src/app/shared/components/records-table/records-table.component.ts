import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Record } from '../../../detail/state/interface';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent {

  @Input()
  data: Record[];

  @Input()
  stretch = false;

  @Output()
  edit: EventEmitter<string> = new EventEmitter();

  @Output()
  delete: EventEmitter<string> = new EventEmitter();

  displayedColumns: string[] = ['position', 'name', 'mileage' , 'date', 'cost', 'notes', 'menu'];
  public context: string;

  constructor() { }

  public onEdit(): void {
    this.edit.emit(this.context);
  }

  public onDelete(): void {
    this.delete.emit(this.context);
  }
}