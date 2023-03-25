import { Component, OnInit } from '@angular/core';
import { Mydata } from 'src/model/mydata';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private api:ApiService) { }
  allData:Mydata[]=[]
  ngOnInit(): void {

  this.getAllData();
  }
  getAllData()
    {
      this.api.getAllData().subscribe((data:any)=>{
        console.log(data);
        this.allData=data;
        
      })
    }
}




