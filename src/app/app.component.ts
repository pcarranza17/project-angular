import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  constructor(private crudService: CrudService) { }

  ngOnInit(){
    this.crudService.initList();
  }
}
