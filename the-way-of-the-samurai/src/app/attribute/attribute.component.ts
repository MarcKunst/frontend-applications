import { Component, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { from } from 'rxjs';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  attribute: Attribute = {
    id: 1,
    name: 'Helmet'
  };

  constructor() { }

  ngOnInit() {
  }

}
