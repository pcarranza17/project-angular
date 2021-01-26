import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import {MessageService} from 'primeng/api';
import { Entity } from 'src/app/model/entity';

export class PrimeEntity implements Entity {
  constructor(public _about?, public accessURL?, public title?) {}
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  about: string;
  title: string;
  accessUrl: string;

  updatedEntity: PrimeEntity;
  currentEntity: Entity;

  constructor(private crudService: CrudService, private messageService: MessageService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idx = this.activeRoute.snapshot.params.id;
    this.currentEntity = this.crudService.getByIndex(idx);
    this.about = this.currentEntity._about;
    this.title = this.currentEntity.title[0]._value;
    this.accessUrl = this.currentEntity.accessURL;
  }

  update(){
    
    const idx = this.activeRoute.snapshot.params.id;
    let title = [];
    title.push({
      '_value' : this.title
    })
    this.updatedEntity = new PrimeEntity(this.about, this.accessUrl);
    this.updatedEntity.title = title;
    this.crudService.update(this.updatedEntity, idx);
    this.messageService.add({severity: 'success', summary: 'Registro actualizado correctamente', detail: ''});
    this.about = '';
    this.title = '';
    this.accessUrl = '';
  }

}
