import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { NgserviceService } from '../ngservice.service';
import {Product}from '../product'


@Component({
  selector: 'app-dele',
  templateUrl: './dele.component.html',
  styleUrls: ['./dele.component.css']
})
export class DeleComponent implements OnInit {

  product=new Products();
  constructor(private _service:NgserviceService) { }

  ngOnInit(): void {
  }
  
  deleteuser(uid){
    this._service.deleteuserserv(uid).subscribe(
      data=>{
        console.log("user deleted  ",uid);
    },
      error=>console.log("error")
    )
  }
}
