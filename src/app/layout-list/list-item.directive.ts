import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListItem]'
})
export class ListItemDirective {

  public itemTemplate: TemplateRef<any>;

  constructor(private templateRef: TemplateRef<any>) {
    this.itemTemplate = this.templateRef;
  }

}
