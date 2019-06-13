import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-booksstudent',
  templateUrl: './booksstudent.component.html',
  styleUrls: ['./booksstudent.component.css']
})
export class BooksstudentComponent implements OnInit {
  books=[];
  constructor(private http:Http,private std:StudentService) { 
    this.http.get('http://localhost:31436/api/books')
    .subscribe(
      response=>
      {
        this.books=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }




}



