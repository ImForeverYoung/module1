import { Component, OnInit } from '@angular/core';
import {TableHttpService} from "../table-http.service";
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit  {

  public name_starship: string="";
  public manufacterer: string="";
  public created: any="";
  public mglt: string="";
  public hyperdrive_rating: string="";
  public length: number|null=0;

  constructor(private service: TableHttpService) { }

  ngOnInit(): void {
    this.service.getData1().subscribe(res => {
      console.log(res);

      this.name_starship=res.name;
      this.created=res.created;
      this.manufacterer=res.manufacterer;
      this.mglt=res.MGLT;
      this.length=res.length;
      this.hyperdrive_rating=res.hyperdrive_rating;
      console.log("gg1");

    })
  }
}
