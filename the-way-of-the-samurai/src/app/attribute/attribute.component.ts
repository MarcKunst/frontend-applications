import { Component, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  allData = [];
  responseData: object [];
  attributes = [];
  selectedAttribute: Attribute;
  url: string = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-18/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+ns%3A+%3Chttp%3A%2F%2Fexample.com%2Fnamespace%3E%0D%0A%0D%0ASELECT+%3Ftype+%28COUNT%28%3Ftype%29+AS+%3FAmount%29++WHERE+%7B%0D%0A++++%0D%0A+++%09%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster6917%3E+skos%3Anarrower*+%3Fplace+.%0D%0A+++%09%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A%0D%0A+++%09%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A++++++++dc%3Atype+%3Ftype+%3B%0D%0A++++++++dct%3Acreated+%3FyearSpan+%3B%0D%0A++++++++edm%3AisShownBy+%3FimageLink+%3B%0D%0A++++++++dc%3Adescription+%3Fdesc+%3B%0D%0A++++++++dc%3Atitle+%3Ftitle+.%0D%0A+++%09FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A++%09FILTER+%28REGEX+%28%3Fdesc%2C+%22samoerai%22%29%29%0D%0A%0D%0A%7D%0D%0AORDER+BY+DESC%28%3FAmount%29&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
  
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response=> {
      const responseData = response;
      this.allData.push(responseData);
      this.allData[0].results.bindings.forEach(object => {
        this.attributes.push(object.type.value);            
      });
      console.log(this.attributes);
    })      
}

  ngOnInit() {
  }

  onSelect(attribute: Attribute): void {
    this.selectedAttribute = attribute;
  }
}
