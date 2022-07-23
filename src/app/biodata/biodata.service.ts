import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biodata } from './biodata';

@Injectable({
  providedIn: 'root',
})
export class BiodataService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Biodata[]>('http://localhost:3000/biodata');
  }

  create(payload: Biodata) {
    return this.http.post<Biodata[]>('http://localhost:3000/biodata', payload);
  }

  delete(id:number){
    return this.http.delete<Biodata[]>(`http://localhost:3000/biodata/${id}`);
  }
}
