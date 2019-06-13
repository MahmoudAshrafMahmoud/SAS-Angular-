import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
 Fees;
 Levels=[];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:31436/api/StdLevel')
    .subscribe(
      response =>{ 
        this.Fees = response.json();       
      },
      error=>{console.log("error");}
    )
    this.http.get('http://localhost:31436/api/levels/')
    .subscribe(
      response =>{ 
        this.Levels = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddFee(data)
  {
   //console.log(data.value);
   data.value.total=this.totalfee;
   this.http.post('http://localhost:31436/api/StdLevel',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  Fee={};
  FeeID;
  EditFees(id){
    this.http.get('http://localhost:31436/api/StdLevel/'+id)
    .subscribe(
      response =>{    
        this.Fee=response.json();
        this.FeeID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateFees(newData){
    newData.value.id=this.FeeID;
    newData.value.total=this.totalfee;
   // console.log(newData.value);
    this.http.put('http://localhost:31436/api/StdLevel/',newData.value)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("success");        
      },
      error=>{console.log("Faild");}
    )
    
  }
  refreshList()
  {
    this.http.get('http://localhost:31436/api/StdLevel')
    .subscribe(
      response =>{ 
        this.Fees = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  fName;
  lName;
  displayName(event)
  {
    //console.log(id.target.value);
    
   this.http.get("http://localhost:31436/api/students/"+event.target.value)
   .subscribe(
     response=>{ 
       //console.log(response);
       this.fName=response.json().fname;
       this.lName=response.json().lname;
     },
     error=>{console.log("error");
     }
     
   );
  }
  ngOnInit() {
  }
  totalfee;
  getTotal(levelId){
   // console.log(levelId.value);
    
    
   this.http.get("http://localhost:31436/api/levels/"+levelId.value)
   .subscribe(
     response=>{ 
       this.totalfee=response.json().fees;
     },
     error=>{console.log("error")})
   
  }



}
