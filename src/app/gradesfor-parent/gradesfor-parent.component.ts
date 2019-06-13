import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-gradesfor-parent',
  templateUrl: './gradesfor-parent.component.html',
  styleUrls: ['./gradesfor-parent.component.css']
})
export class GradesforParentComponent implements OnInit {
id;
crsGrades=[];
  constructor(private http:Http,private par:ParentService) { 
    this.id=par.getToken();
    //console.log(this.id);    
    this.http.get('http://localhost:31436/api/search?parentID='+this.id)
    .subscribe(
      response=>
      {
        //console.log(response.json());
       this.crsGrades=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }

}
