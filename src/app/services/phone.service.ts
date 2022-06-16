import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private baseURL = "http://localhost:5000/phones/phone";


  constructor(private httpClient: HttpClient) { }

  getPhoneList(): Observable<Phone[]>{
    return this.httpClient.get<Phone[]>(`${this.baseURL}`);
  }

  createPhone(phone: Phone): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, phone);
  }

  getPhoneById(id: number): Observable<Phone>{
    return this.httpClient.get<Phone>(`${this.baseURL}/${id}`);
  }

  /*updatePhone(id: number, phone: Phone): Observable<Object>{
    return this.httpClient.put<Phone>(`${this.baseURL}/${id}`, phone);
  }*/

  updatePhone(phone: Phone): Observable<Object>{
    return this.httpClient.put<Phone>(`${this.baseURL}`, phone);
  }

  deletePhone(id: number): Observable<Object>{
    return this.httpClient.delete<Phone>(`${this.baseURL}/${id}`);
  }
}
