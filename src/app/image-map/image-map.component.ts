import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.scss']
})
export class ImageMapComponent implements OnInit {

  @Input() attribute: Attribute;
  
  constructor() { }

  ngOnInit() {
  }

}
