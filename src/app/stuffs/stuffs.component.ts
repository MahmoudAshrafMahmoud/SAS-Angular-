import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.css']
})
export class StuffsComponent {

  stuffs = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:31436/api/stuffs/')
    .subscribe(
      response =>{ 
        this.stuffs = response.json();       
      },
      error=>{console.log("error");}
    );
    this.GetAllRoles();
  }
  Addstuffs(data)
  {
   //console.log(data.value.Img);
   data.value.RoleId = 2;
//console.log(data.value);

   this.http.post('http://localhost:31436/api/stuffs',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  Deletestuffs(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:31436/api/stuffs/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  mystuffs={};
  stuffsID;
  Editstuffs(id){
    this.http.get('http://localhost:31436/api/stuffs/'+id)
    .subscribe(
      response =>{    
        this.mystuffs=response.json();
        this.stuffsID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updatestuffs(newData){
    newData.value.id=this.stuffsID;
   // console.log(newData.value);
    this.http.put('http://localhost:31436/api/stuffs',newData.value)
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
    this.http.get('http://localhost:31436/api/stuffs/')
    .subscribe(
      response =>{ 
        this.stuffs = response.json();        
      },
      error=>{console.log("success");}
    )
  }
  Roles=[];
  GetAllRoles()
  {
    this.http.get('http://localhost:31436/api/Roles')
    .subscribe(
      response =>{ 
        this.Roles = response.json(); 
       //console.log(response.json);
          

      },
      error=>{console.log("error");}
    )
  }
}
