import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListItem]'
})
export class ListItemDirective {

  public listTemplate: TemplateRef<any>;

  constructor(private templateRef: TemplateRef<any>) {
    this.listTemplate = this.templateRef;
  }

}
