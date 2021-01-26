import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/model/entity';
import { CrudService } from '../../../services/crud.service';
import {MessageService} from 'primeng/api';

export class PrimeEntity implements Entity {
  constructor(public _about?, public accessURL?, public title?) {}
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  about: string;
  title: string;
  accessUrl: string;

  newEntity: PrimeEntity;

  constructor(private crudService: CrudService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  save(){
    let title = [];
    title.push({
      '_value' : this.title
    })
    this.newEntity = new PrimeEntity(this.about, this.accessUrl);
    this.newEntity.title = title;
    this.crudService.add(this.newEntity);
    this.messageService.add({severity: 'success', summary: 'Registro creado correctamente', detail: ''});
    this.about = '';
    this.title = '';
    this.accessUrl = '';
  }

}
