import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-feesfor-parent',
  templateUrl: './feesfor-parent.component.html',
  styleUrls: ['./feesfor-parent.component.css']
})
export class FeesforParentComponent implements OnInit {
id;
stdFees=[];
  constructor(private http:Http,private par:ParentService) { 
    this.id=par.getToken();
    //console.log(this.id);    
    this.http.get('http://localhost:31436/api/search?pid='+this.id)
    .subscribe(
      response=>
      {
        //console.log(response.json());
       this.stdFees=response.json();
      },
      error=>{console.log("error");
      }
    );

  }

  ngOnInit() {
  }

}


