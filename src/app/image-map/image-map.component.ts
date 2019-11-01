import { Component, OnInit, Input, ViewChildren, ElementRef } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.scss'],
  template: `
    <div #highlightContainer>
      <img id="head" class="svg-layers" src="../../assets/img/head.svg" name="helm met nekstuk ; onderdeel van wapenrusting">
      <img id="shoulders" class="svg-layers" src="../../assets/img/shoulders.svg" name="schouderstuk ; onderdeel van wapenrusting">
      <img id="arm" class="svg-layers" src="../../assets/img/arm.svg" name="armstuk ; onderdeel van wapenrusting">
      <img id="sword" class="svg-layers" src="../../assets/img/sword.svg" name="zwaardstootplaat (tsuba)">
      <img id="foot" class="svg-layers" src="../../assets/img/foot.svg" name="beenstuk ; onderdeel van wapenrusting">
      <img id="full-harnas" class="svg-layers" src="../../assets/img/full-harnas.svg" name="borstpantser (onderdeel) ; onderdeel van wapenrusting">
    </div>
    ` ,

})
export class ImageMapComponent implements OnInit {
  @Input() attribute: Attribute;
  @ViewChildren('highlightContainer', {read: ElementRef}) highlightContainer: ElementRef;
  highlight;

  constructor() {
    
  }
  
  ngOnChanges() {
    
    this.highlight = this.highlightContainer.first.nativeElement.childNodes;

    for(let i = 0; i < this.highlight.length; i++ ){
      if (this.highlight[i].name === this.attribute) {
        this.highlight.forEach(element => {
          element.style.display = "none";
        });
        this.highlight[i].style.display = "block";
        console.log(this.highlight[i]);
      }
    }
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    console.log(this.highlightContainer.first.nativeElement.childNodes);
  }
  
}
