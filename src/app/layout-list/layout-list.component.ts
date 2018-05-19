import { ListItemDirective } from './list-item.directive';
import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-layout-list',
  templateUrl: './layout-list.component.html',
  styleUrls: ['./layout-list.component.css']
})
export class LayoutListComponent {

  @ContentChildren(ListItemDirective) listItems: QueryList<ListItemDirective>;

  constructor() { }


}
