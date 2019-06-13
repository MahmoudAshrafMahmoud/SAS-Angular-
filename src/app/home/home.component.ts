import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
news=[];
  constructor(private http:Http) { 
    
   this.http.get('http://localhost:31436/api/news')
   .subscribe(
             response =>{
               this.news=response.json();
             },
             error =>{console.log("Error");
     });
  }

  ngOnInit() {
  }

}
