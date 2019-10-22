import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-attribute-detail',
  templateUrl: './attribute-detail.component.html',
  styleUrls: ['./attribute-detail.component.scss']
})
export class AttributeDetailComponent implements OnInit {
  @Input() attribute: Attribute;
  constructor() { }

  ngOnInit() {
  }

}
