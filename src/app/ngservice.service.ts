import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Product} from './product';




@Injectable({

  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  // add user 
  fetchProductListFromRemote():Observable<any>{
     return  this._http.get<any>("http://localhost:9999/getProd");
    }
 
    // read
    addproductToRemote(product :Product):Observable<any>{
      console.log(product ,"Hi Boss");
      return this._http.post<any>("http://localhost:9999/addProd",product);
      
    }
 
    // same as insert but method is put insted of post 
    upadate(){}

    // Delete  user id 
    private baseUrl="http://localhost:9999/deleteProd";
    deleteuserserv(id: number): Observable<any> {
      return this._http.delete("http://localhost:9999/deleteProd/"+`${id}`, { responseType: 'text' });
    }
  }





