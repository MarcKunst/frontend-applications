import { Component, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { ATTRIBUTES } from '../mock-attributes';
import { from } from 'rxjs';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  
  attributes = ATTRIBUTES;
  selectedAttribute: Attribute;

  constructor() { }

  ngOnInit() {
  }

  onSelect(attribute: Attribute): void {
    this.selectedAttribute = attribute;
  }
}
