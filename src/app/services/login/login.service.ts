import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  public login(email: string, senha: string): Observable<{ token: string }> {
    return this.http.post<{token: string}>(this.apiUrl + "/login", { email, senha })
  }

  public enviarCodigo(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/esqueci-senha", { email })
  }

  public validarCodigo(email: string, codigo: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/validar-codigo", { email, codigo})
  }

  public trocarSenha(email: string, novaSenha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/trocar-senha", { email, novaSenha })
  }
  

}
