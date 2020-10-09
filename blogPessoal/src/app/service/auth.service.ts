import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.htttp.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User) {
    return this.htttp.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true
    }

    return ok

  }

  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true
    }

    return ok

    
  }



}
