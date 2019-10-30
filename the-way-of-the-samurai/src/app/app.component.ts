import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

​

export class AppComponent {
    title = 'The way of the samurai';


    constructor(private http: HttpClient) {
    }
    
      ngOnInit() {
      }
    
    }