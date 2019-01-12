import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import {HttpParams} from "@angular/common/http";
import {paraminput} from "../app/paraminput"

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user){
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
            .map((response: Response) =>response.json())
  }

  GetUser(){
    
    return this.http.get('http://localhost:8080/api/getUser1/')
            .map((response: Response) => response.json())
  }
  searchUser(pi){
    let mno =[
        'rajesh','456'
      ]
      let mbno1=165;
      // let pi :paraminput;
      // pi.id = "450";
      // pi.mbno="569"
//   alert("this searchUser Service");
    console.log("serachuser servie");
   //console.log("common service:" + sform1);
   let myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');    
   let myParams = new URLSearchParams();
   myParams.append('mobno', '9');			
   let options = new RequestOptions({ headers: myHeaders, params: myParams });
      //console.log(params.getAll);
    //const params = new HttpParams().set('_mobno', "91");

    return this.http.get('http://localhost:8080/api/sUser1/'+pi).map((response: Response) => response.json())
    
  }

 deleteUser(id){
   console.log("service detle id :" + id);
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})
            .map((response: Response) =>response.json())
  }

}