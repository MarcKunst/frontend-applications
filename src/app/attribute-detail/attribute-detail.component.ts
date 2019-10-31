import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attribute-detail',
  templateUrl: './attribute-detail.component.html',
  styleUrls: ['./attribute-detail.component.scss']
})

export class AttributeDetailComponent implements OnInit {
  url = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-18/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+ns%3A+%3Chttp%3A%2F%2Fexample.com%2Fnamespace%3E%0D%0ASELECT+%28SAMPLE%28%3Fcho%29+AS+%3FchoSample%29+%3Ftitle+%3Fdesc+%3Ftype+%3FimageLink+%3FyearSpan+WHERE+%7B%0D%0A++%0D%0A++VALUES+%3Ftype+%7B+%22schouderstuk+%3B+onderdeel+van+wapenrusting%22+%22armstuk+%3B+onderdeel+van+wapenrusting%22+%22helm+met+nekstuk+%3B+onderdeel+van+wapenrusting%22+%22beenstuk+%3B+onderdeel+van+wapenrusting%22+%22zwaardstootplaat+%28tsuba%29%22+%22schoen+%3B+onderdeel+van+wapenrusting%22+%22zaag+%3B+noko%22+%22borstpantser+%28onderdeel%29+%3B+onderdeel+van+wapenrusting%22%7D%0D%0A++%0D%0A++%3Fcho+%28dc%3Atitle+%7C+dc%3Adescription%29+%3Ffulltext+%3B%0D%0A++%0D%0A++dc%3Atype+%3Ftype+%3B%0D%0A++dct%3Acreated+%3FyearSpan+%3B%0D%0A++edm%3AisShownBy+%3FimageLink+%3B%0D%0A++dc%3Adescription+%3Fdesc+%3B%0D%0A++dc%3Atitle+%3Ftitle+.%0D%0A++FILTER+%28REGEX+%28%3Ffulltext%2C+%22samoerai%22%29%29%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
  responseData: object = [];
  allData = [];
  resultsList = [];
  resultMatch;
  @Input() attribute: Attribute;
  
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response=> {
        const responseData = response;
        this.allData.push(responseData);
        this.allData[0].results.bindings.forEach(element => {
          this.resultsList.push(element);
        });
    })
}

  ngOnChanges() {
    for(let i = 0; i < this.resultsList.length; i++ ){
      if (this.resultsList[i].type.value === this.attribute) {
        this.resultMatch = this.resultsList[i];
      }

    }
  }

  ngOnInit() {
  }

}
