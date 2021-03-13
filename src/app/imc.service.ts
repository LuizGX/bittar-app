import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imc } from './shared/imc.model';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  private url: string = 'http://localhost:3000/api/imc/';
  constructor(private http: HttpClient) { }

  public getAllImc(): Promise<Imc[]> {
    return this.http.get(this.url + 'all')
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getImcByCpf(cpf): Promise<Imc[]> {
    return this.http.get(this.url + 'search/' + cpf)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public newImc(imc): Promise<any> {
    return this.http.post(this.url, imc).toPromise().then((res) => res);
  }

}
