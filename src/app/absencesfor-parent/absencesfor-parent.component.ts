import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-absencesfor-parent',
  templateUrl: './absencesfor-parent.component.html',
  styleUrls: ['./absencesfor-parent.component.css']
})
export class AbsencesforParentComponent implements OnInit {
id;
stdAbsences=[];
  constructor(private http:Http,private par:ParentService) { 
    this.id=par.getToken();
    //console.log(this.id);    
    this.http.get('http://localhost:31436/api/search?parid='+this.id)
    .subscribe(
      response=>
      {
        //console.log(response.json());
       this.stdAbsences=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }

}

