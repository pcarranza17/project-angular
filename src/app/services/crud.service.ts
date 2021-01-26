import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = `https://datos.gob.es/apidata/catalog/distribution`;

  list: Entity[];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url).pipe(
      map((records: any) => {
        console.log(records.result.items);
        return records.result.items;
      })
    );
  }

  initList(){
      if ( !localStorage.getItem('list') ){
        this.getAll().subscribe(items => {
          localStorage.setItem('list', JSON.stringify(items));
          location.reload();
        });
       
      }
  }


  getList(){
    return JSON.parse(localStorage.getItem('list'));
  }

  add(newEntity: Entity){
    let list = this.getList();
    list.push(newEntity);
    localStorage.setItem('list', JSON.stringify(list));
  }

  delete(index: number){
    let list = this.getList();
    list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(list));
  }

  update(updateEntity: Entity, index: number){
    let list = this.getList();
    list[index] = updateEntity;
    localStorage.setItem('list', JSON.stringify(list));
  }

  getByIndex(index: number){
    const list = this.getList();
    return list[index];
  }
}
