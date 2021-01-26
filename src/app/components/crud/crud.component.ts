import { Component, OnInit } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { ConfirmationService } from 'primeng/api';

import { Entity } from '../../model/entity';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  displayDialog: boolean;
  entities: Entity[];
  cols: any[];
  selectedEntity: Entity;
  newCar: boolean;

  constructor(private crudService: CrudService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.entities = this.crudService.getList();
    
    console.log(this.entities);

    this.cols = [
      { field: 'title', header: 'Title' },
      { field: '_about', header: 'About' },
      { field: 'accessURL', header: 'Access URL' },
    ];
  }

  delete(i: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected entity?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.crudService.delete(i);
          this.entities = this.crudService.getList();
      }
  });


}

refresh(){
  location.reload();
}

}
