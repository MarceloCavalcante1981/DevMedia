import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http:HttpClient) { }

  getListarLembretes(): Observable<Lembrete[]>{
    const url = '${environment.lembrete}/lembrete';
    return this.http.get<Lembrete[]>(url);
  }
 

  
}
